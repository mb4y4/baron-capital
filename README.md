# Baron Capital — Modern Microfinance Website

Full-stack scaffold: React/TypeScript/Tailwind frontend, Django REST backend
(structured as four microservice apps), PostgreSQL, Docker, and Kubernetes.

## Project Structure

```
baron-capital/
├── frontend/           React + TypeScript + Tailwind (Vite)
│   └── src/
│       ├── components/ layout (Header/Footer), common (LoanCalculator)
│       ├── pages/       Home, Products, ProductDetail, About, Contact, Apply
│       ├── data/        static product/branch data (swap for API calls as backend fills in)
│       └── services/    axios API client
├── backend/            Django REST API
│   └── apps/
│       ├── core_app/         products/branches/team/blog/applications/contact
│       ├── payments/         transactions (disbursements/repayments)
│       ├── compliance/       KYC/AML checks
│       └── loan_calculator/  amortization calculation endpoint
├── infra/
│   ├── docker-compose.yml       production-style local stack
│   ├── docker-compose.dev.yml   hot-reload dev override
│   └── k8s/                     Kubernetes manifests for cloud deployment
└── docs/
```

Each backend app is deliberately loosely coupled (ID references instead of
cross-app foreign keys) so any of them — Payments or Compliance, for example —
can be split into its own Django project and deployed/scaled independently
later, matching the "microservices" architecture in the spec, without a
rewrite.

## 1. Local Development Setup

### Prerequisites
- Node.js v18+
- Python 3.10+
- PostgreSQL 13+ (or use Docker for it — see below)
- Docker + Docker Compose (recommended, simplest path)
- Git

### Option A — Docker Compose (recommended)

```bash
# from the infra/ directory
cp ../backend/.env.example ../backend/.env
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

- Frontend (hot reload): http://localhost:5173
- Backend API: http://localhost:8000/api/
- Django admin: http://localhost:8000/admin/
- Postgres: localhost:5432

Run migrations and create an admin user the first time:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml exec backend-core python manage.py migrate
docker compose -f docker-compose.yml -f docker-compose.dev.yml exec backend-core python manage.py createsuperuser
```

### Option B — Run natively (no Docker)

**Backend:**
```bash
cd backend
python -m venv venv && source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Make sure Postgres is running locally and matches the .env credentials,
# or create the DB: createdb baron_capital
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

**Frontend:**
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Visit http://localhost:5173 — the Vite dev server proxies `/api` calls to
`http://localhost:8000` (configured in `vite.config.ts`).

## 2. Building for Production

```bash
# Frontend
cd frontend && npm run build     # outputs to frontend/dist

# Backend — collect static assets
cd backend && python manage.py collectstatic --noinput
```

Or build both Docker images directly:

```bash
docker build -t baron-capital-frontend ./frontend
docker build -t baron-capital-backend ./backend
```

## 3. Deploying to the Cloud (AWS / Azure / GCP)

The `infra/k8s/` manifests are cloud-agnostic Kubernetes resources. Broad
steps for any provider:

1. **Push images to a container registry**
   ```bash
   docker tag baron-capital-frontend REGISTRY/baron-capital-frontend:latest
   docker push REGISTRY/baron-capital-frontend:latest
   docker tag baron-capital-backend REGISTRY/baron-capital-backend:latest
   docker push REGISTRY/baron-capital-backend:latest
   ```
   (REGISTRY = your ECR/ACR/Artifact Registry URL)

2. **Provision a managed Postgres instance** (strongly recommended over the
   in-cluster `02-postgres.yaml` for production — use RDS, Azure Database
   for PostgreSQL, or Cloud SQL). Update `POSTGRES_HOST` in the secret/env
   accordingly, and you can skip `02-postgres.yaml` entirely.

3. **Create the real secret** (don't commit real values to `01-secrets.yaml`):
   ```bash
   kubectl create secret generic baron-secrets \
     --namespace baron-capital \
     --from-literal=DJANGO_SECRET_KEY=$(openssl rand -hex 32) \
     --from-literal=POSTGRES_DB=baron_capital \
     --from-literal=POSTGRES_USER=baron \
     --from-literal=POSTGRES_PASSWORD='your-strong-password'
   ```

4. **Apply the manifests** (update the `REGISTRY/...` image names and the
   `baroncapital.co.ke` host in `04-frontend.yaml`/`05-ingress.yaml` first):
   ```bash
   kubectl apply -f infra/k8s/00-namespace.yaml
   kubectl apply -f infra/k8s/01-secrets.yaml   # only if not using the CLI command above
   kubectl apply -f infra/k8s/02-postgres.yaml  # skip if using managed DB
   kubectl apply -f infra/k8s/03-backend.yaml
   kubectl apply -f infra/k8s/04-frontend.yaml
   kubectl apply -f infra/k8s/05-ingress.yaml
   ```

5. **Run migrations against the cluster's DB** (one-off job or exec into a pod):
   ```bash
   kubectl exec -n baron-capital deploy/backend-core -- python manage.py migrate
   ```

6. **Point DNS** for `baroncapital.co.ke` at your ingress controller's load
   balancer IP/hostname, and confirm `cert-manager` (or your provider's
   equivalent) has issued a TLS certificate.

### Managed-Kubernetes notes
- **AWS**: EKS + ALB Ingress Controller (or the nginx-ingress used here) + RDS Postgres + ECR.
- **Azure**: AKS + Application Gateway Ingress Controller + Azure Database for PostgreSQL + ACR.
- **GCP**: GKE + GCE Ingress (or nginx-ingress) + Cloud SQL for PostgreSQL + Artifact Registry.

A CI/CD pipeline (GitHub Actions, GitLab CI, etc.) can automate steps 1 and
4–5 on every push to `main` — happy to scaffold that next.

## 4. What's Still a Placeholder

- Blog posts, team bios, and testimonials are stubbed with sample data —
  wire them to the `core_app` admin/API once real content is ready.
- Payment gateway integration (M-Pesa/bank) is not implemented — see the
  `TransactionListCreateView` docstring in `apps/payments/views.py` for
  where that plugs in.
- Authentication/authorization is not yet added (all endpoints are
  `AllowAny`) — needed before this handles real customer data in production.
