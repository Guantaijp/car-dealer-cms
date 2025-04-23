"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface FinanceCalculatorProps {
  price: number
}

export function FinanceCalculator({ price }: FinanceCalculatorProps) {
  const [downPayment, setDownPayment] = useState(Math.round(price * 0.2))
  const [loanTerm, setLoanTerm] = useState(60)
  const [interestRate, setInterestRate] = useState(4.5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    // Calculate monthly payment
    const principal = price - downPayment
    const monthlyRate = interestRate / 100 / 12
    const termMonths = loanTerm

    if (principal > 0 && monthlyRate > 0 && termMonths > 0) {
      const payment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
        (Math.pow(1 + monthlyRate, termMonths) - 1)
      setMonthlyPayment(Math.round(payment))
    } else {
      setMonthlyPayment(Math.round(principal / termMonths))
    }
  }, [price, downPayment, loanTerm, interestRate])

  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-1">
          <Label htmlFor="down-payment">Down Payment</Label>
          <span className="text-sm text-slate-500">${downPayment.toLocaleString()}</span>
        </div>
        <Slider
          id="down-payment"
          defaultValue={[downPayment]}
          max={price}
          step={1000}
          onValueChange={(value) => setDownPayment(value[0])}
        />
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <Label htmlFor="loan-term">Loan Term</Label>
          <span className="text-sm text-slate-500">{loanTerm} months</span>
        </div>
        <Slider
          id="loan-term"
          defaultValue={[loanTerm]}
          min={24}
          max={84}
          step={12}
          onValueChange={(value) => setLoanTerm(value[0])}
        />
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <Label htmlFor="interest-rate">Interest Rate</Label>
          <span className="text-sm text-slate-500">{interestRate}%</span>
        </div>
        <Slider
          id="interest-rate"
          defaultValue={[interestRate]}
          min={1}
          max={10}
          step={0.1}
          onValueChange={(value) => setInterestRate(value[0])}
        />
      </div>

      <div className="p-3 bg-white rounded-lg border text-center">
        <div className="text-sm text-slate-500">Estimated Monthly Payment</div>
        <div className="text-2xl font-bold text-navy-900">${monthlyPayment.toLocaleString()}</div>
      </div>

      <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply for Financing</Button>
    </div>
  )
}
