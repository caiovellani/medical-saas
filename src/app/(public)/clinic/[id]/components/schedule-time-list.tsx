'use client'

import type { TimeSlot } from '@/app/(public)/clinic/[id]/components/schedule-content'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ScheduleTimeListProps {
  selectedDate: Date
  selectedTime: string
  requiredSlots: number
  blockedTimes: string[]
  availableTimeSlots: TimeSlot[]
  clinicTimes: string[]
  onSelectTime: (time: string) => void
}

export function ScheduleTimeList({
  selectedDate,
  selectedTime,
  onSelectTime,
  requiredSlots,
  blockedTimes,
  availableTimeSlots,
  clinicTimes,
}: ScheduleTimeListProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
      {availableTimeSlots.map((slot) => {
        return (
          <Button
            onClick={() => onSelectTime(slot.time)}
            key={slot.time}
            variant="outline"
            type="button"
            className={cn(
              'h-10 select-none',
              selectedTime === slot.time &&
                'border-2 border-emerald-500 text-primary'
            )}
          >
            {slot.time}
          </Button>
        )
      })}
    </div>
  )
}
