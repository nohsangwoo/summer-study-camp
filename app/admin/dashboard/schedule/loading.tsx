import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ScheduleLoading() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
        <div className="mt-4 md:mt-0">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
            <Skeleton className="h-6 w-48" />
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1">
            {/* 요일 헤더 */}
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="text-center py-2">
                <Skeleton className="h-5 w-10 mx-auto mb-1" />
                <Skeleton className="h-3 w-5 mx-auto" />
              </div>
            ))}

            {/* 일정 그리드 */}
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="min-h-[150px] border border-gray-100 p-1">
                {Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, j) => (
                  <Skeleton key={j} className="h-10 w-full mb-1 rounded" />
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
