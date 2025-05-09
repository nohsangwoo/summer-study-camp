import { Skeleton } from "@/components/ui/skeleton"

export default function MetodaAboutLoading() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-64 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Skeleton className="w-32 h-32 rounded-full mb-3" />
            <Skeleton className="h-6 w-24 mb-2" />
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>
    </div>
  )
}
