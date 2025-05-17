import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarDays, Calendar } from "lucide-react"

export default function ScheduleTab() {
  const scheduleItems = [
    { id: 1, title: "개강일", content: "2025년 7월20일(일요일)" },
    { id: 2, title: "캠프기간", content: "7/20(일)~8/9(토)" },
    { id: 3, title: "모집대상", content: "중학생 전학년\n고등학생 1학년" },
    { id: 4, title: "접수안내", content: "캠프신청 홈페이지 참고" }
  ]

  // 모바일용 카드 형태 UI
  const MobileScheduleView = () => (
    <div className="space-y-4">
      {scheduleItems.map((item) => (
        <Card key={item.id} className="border-l-4 border-l-blue-500 flex items-center ">
          <CardContent className="p-4 ">
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-700 pl-3 pr-5 py-2 rounded-md font-medium text-sm whitespace-nowrap">
                {item.title}
              </div>
              <div className="ml-4 text-gray-700 text-sm">
                {item.content.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <Card>
      <CardHeader className="bg-slate-50">
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-blue-600" />
          일정 안내
        </CardTitle>
        <CardDescription>캠프 일정 및 기간에 대한 상세 정보입니다.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* 모바일 화면용 카드 레이아웃 */}
        <div className="block md:hidden">
          <MobileScheduleView />
        </div>

        {/* 데스크톱 화면용 테이블 레이아웃 */}
        <div className="hidden md:block">
          <Table>
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead className="w-1/4 font-bold">구분</TableHead>
                <TableHead className="w-1/4 font-bold">항목</TableHead>
                <TableHead className="w-2/4 font-bold">내용</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell rowSpan={4} className="font-medium bg-slate-700 text-white align-middle text-center">
                  일정 안내
                </TableCell>
                <TableCell className="font-medium bg-gray-100">개강일</TableCell>
                <TableCell>2025년 7월20일(일요일)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-gray-100">캠프기간</TableCell>
                <TableCell>7/20(일)~8/9(토)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-gray-100">모집대상</TableCell>
                <TableCell>중학생 전학년<br />고등학생 1학년</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-gray-100">접수안내</TableCell>
                <TableCell>캠프신청 홈페이지 참고</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
