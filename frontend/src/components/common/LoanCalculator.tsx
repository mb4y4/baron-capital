import { useMemo, useState } from 'react'

interface Props {
  className?: string
}

// Standard amortizing loan monthly installment formula. The rate entered
// here is a MONTHLY rate (common quoting convention for microfinance
// products in Kenya), not an annual rate divided down.
function computeMonthlyInstallment(amount: number, monthlyRatePercent: number, termMonths: number) {
  const monthlyRate = monthlyRatePercent / 100
  if (monthlyRate === 0) return amount / termMonths
  const installment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)
  return installment
}

function Field({
  label,
  value,
  onChange,
  min,
  step,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min?: number
  step?: number
}) {
  return (
    <label className="block">
      <span className="block text-sm text-bc-ink/60">{label}</span>
      <input
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border-0 border-b-2 border-bc-line bg-transparent py-2 font-heading text-2xl font-bold text-bc-navy focus:border-bc-gold-deep focus:outline-none"
      />
    </label>
  )
}

export default function LoanCalculator({ className = '' }: Props) {
  const [amount, setAmount] = useState(100000)
  const [rate, setRate] = useState(14)
  const [term, setTerm] = useState(12)

  const result = useMemo(() => {
    const monthly = computeMonthlyInstallment(amount, rate, term)
    return { monthly, total: monthly * term, interest: monthly * term - amount }
  }, [amount, rate, term])

  const fmt = (n: number) =>
    n.toLocaleString('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 })

  return (
    <div className={className}>
      <div className="grid gap-8 md:grid-cols-3">
        <Field label="Loan amount (KES)" value={amount} onChange={setAmount} min={1000} />
        <Field label="Monthly interest rate (%)" value={rate} onChange={setRate} min={0} step={0.1} />
        <Field label="Repayment period (months)" value={term} onChange={setTerm} min={1} />
      </div>

      <div className="mt-10 max-w-md space-y-3 border-t border-bc-line pt-6">
        {[
          ['Monthly installment', fmt(result.monthly)],
          ['Total repayment', fmt(result.total)],
          ['Total interest', fmt(result.interest)],
        ].map(([label, value]) => (
          <div key={label} className="flex items-baseline gap-2">
            <span className="text-sm text-bc-ink/60">{label}</span>
            <span className="flex-1 border-b border-dotted border-bc-line" />
            <span className="font-heading text-lg font-bold text-bc-navy">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}