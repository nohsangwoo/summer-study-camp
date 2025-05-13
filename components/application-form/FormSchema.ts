import * as z from "zod"

export const formSchema = z.object({
  // 01. 방학캠프 신청 과정
  campPeriod: z.string({
    required_error: "캠프 기간을 선택해주세요.",
  }),

  // 02. 기본정보 입력
  studentName: z.string().min(2, {
    message: "이름은 2글자 이상이어야 합니다.",
  }),
  gender: z.string({
    required_error: "성별을 선택해주세요.",
  }),
  birthYear: z.string().min(4, {
    message: "출생년도를 입력해주세요.",
  }),
  birthMonth: z.string().min(1, {
    message: "출생월을 입력해주세요.",
  }),
  birthDay: z.string().min(1, {
    message: "출생일을 입력해주세요.",
  }),
  phone: z.string().min(10, {
    message: "유효한 전화번호를 입력해주세요.",
  }),
  address: z.string().min(1, {
    message: "주소를 입력해주세요.",
  }),
  addressDetail: z.string().optional(),

  // 03. 보호자 정보 입력
  fatherName: z.string().optional(),
  fatherPhone: z.string().optional(),
  fatherEmail: z
    .string()
    .email({
      message: "유효한 이메일 주소를 입력해주세요.",
    })
    .optional(),
  motherName: z.string().optional(),
  motherPhone: z.string().optional(),
  motherEmail: z
    .string()
    .email({
      message: "유효한 이메일 주소를 입력해주세요.",
    })
    .optional(),
  emergencyContact: z.string().min(1, {
    message: "비상연락처를 입력해주세요.",
  }),

  // 04. 참여 및 신청 정보 입력
  mathLevel: z.string({
    required_error: "수학 관련 선택을 해주세요.",
  }),
  mathCourses: z.array(z.string()).optional(),
  englishLevel: z.string({
    required_error: "영어 관련 선택을 해주세요.",
  }),
  koreanLevel: z.string({
    required_error: "국어 관련 선택을 해주세요.",
  }),
  applicationDate: z.string({
    required_error: "참가신청일을 선택해주세요.",
  }),
  applicationReason: z.array(z.string()).optional(),

  // 05. 선택정보 입력
  referral: z.string().optional(),
  campSelection: z.string({
    required_error: "캠프 선택 방법을 선택해주세요.",
  }),
  covidConsent: z.string({
    required_error: "코로나 심각 등급에 관한 동의 여부를 선택해주세요.",
  }),
  referralChannels: z.array(z.string()).optional(),

  // 06. 특강 신청 (수요조사)
  studentGrade: z.string({
    required_error: "학생 구분을 선택해주세요.",
  }),
  middleSchoolLectures: z.array(z.string())
    .refine((lectures) => {
      // 중학생 선택 시, 2개 이상 선택 필수
      return lectures.length >= 0; // 학생 구분이 중학생인 경우만 검증하도록 page.tsx에서 처리
    }, {
      message: "중학생은 최소 2개 이상의 특강을 선택해야 합니다.",
    }),
  highSchoolLectures: z.array(z.string())
    .refine((lectures) => {
      // 고등학생 선택 시, 2개 이상 선택 필수
      return lectures.length >= 0; // 학생 구분이 고등학생인 경우만 검증하도록 page.tsx에서 처리
    }, {
      message: "고등학생은 최소 2개 이상의 특강을 선택해야 합니다.",
    }),

  // 개인정보 수집 및 이용 동의
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
  }),
})

export type FormValues = z.infer<typeof formSchema>

// 셀렉트 옵션 데이터들
export const mathCourseOptions = [
  { id: "math1", label: "초1~2학년" },
  { id: "math2", label: "초3~4학년" },
  { id: "math3", label: "초5~6학년" },
  { id: "math4", label: "중등수준" },
  { id: "math5", label: "고등수준" },
  { id: "math6", label: "기타" },
]

export const applicationReasonOptions = [
  { id: "reason1", label: "진로 및 학업에 도움이 될 것 같아서" },
  { id: "reason2", label: "주변 추천 (학교, 학원, 부모님, 지인 등)" },
  { id: "reason3", label: "자녀 추천 (예전 참가 경험, 관심 선택, 입소 희망 본인)" },
]

export const referralChannelOptions = [
  { id: "channel1", label: "네이버 검색" },
  { id: "channel2", label: "유튜브 검색" },
  { id: "channel3", label: "페이스북/인스타그램" },
  { id: "channel4", label: "카페" },
  { id: "channel5", label: "지인추천/소개" },
  { id: "channel6", label: "학원소개" },
  { id: "channel7", label: "기존참가" },
  { id: "channel8", label: "선생님추천" },
]

// 학생 구분 옵션
export const studentGradeOptions = [
  { id: "middle", label: "중학생" },
  { id: "high", label: "고등학생" },
]

// 중학생 특강 옵션
export const middleSchoolLectureOptions = [
  { id: "m_lecture1", label: "중학 수학 기초" },
  { id: "m_lecture2", label: "중학 영어 문법" },
  { id: "m_lecture3", label: "중학 과학 심화" },
  { id: "m_lecture4", label: "중학 논술 특강" },
]

// 고등학생 특강 옵션
export const highSchoolLectureOptions = [
  { id: "h_lecture1", label: "고교 수학 기초" },
  { id: "h_lecture2", label: "고교 영어 독해" },
  { id: "h_lecture3", label: "고교 국어 문학" },
  { id: "h_lecture4", label: "고교 물리 심화" },
  { id: "h_lecture5", label: "고교 화학 심화" },
  { id: "h_lecture6", label: "고교 생명과학 심화" },
  { id: "h_lecture7", label: "고교 논술 특강" },
] 