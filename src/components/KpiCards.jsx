import React from 'react';
import KpiCard from './KpiCard';
import { Users, CreditCard, AlertCircle, CheckCircle2, UserCheck, ShieldAlert } from 'lucide-react';

export default function KpiCards({ summary }) {
  if (!summary) return null;

  const formatPHP = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(amount || 0);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <KpiCard 
        title="Total Registrations" 
        value={summary.totalRegistrations} 
        icon={Users} 
        colorTheme="blue" 
      />
      <KpiCard 
        title="Total Payments" 
        value={formatPHP(summary.totalPayments)} 
        icon={CreditCard} 
        colorTheme="green" 
      />
      <KpiCard 
        title="Uncollected Payments" 
        value={formatPHP(summary.uncollectedPayments)} 
        icon={ShieldAlert} 
        colorTheme="amber" 
      />
      <KpiCard 
        title="Confirmed" 
        value={summary.confirmed} 
        icon={CheckCircle2} 
        colorTheme="indigo" 
      />
      <KpiCard 
        title="Checked In" 
        value={summary.checkedIn} 
        icon={UserCheck} 
        colorTheme="green" 
      />
      <KpiCard 
        title="Pending" 
        value={summary.pending} 
        icon={AlertCircle} 
        colorTheme="amber" 
      />
      <KpiCard 
        title="Cancelled" 
        value={summary.cancelled} 
        icon={ShieldAlert} 
        colorTheme="purple" 
      />
    </div>
  );
}