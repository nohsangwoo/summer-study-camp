import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarDays } from "lucide-react"

export default function ScheduleTab() {
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
              <TableCell>캠프 신청 홈페이지 참조</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium bg-gray-100">캠프기간</TableCell>
              <TableCell>캠프 신청 홈페이지 참조</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium bg-gray-100">모집대상</TableCell>
              <TableCell>중1 ~ 고3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium bg-gray-100">접수안내</TableCell>
              <TableCell>캠프 신청 홈페이지 참조</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
