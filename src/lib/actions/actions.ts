"use server"

interface QuestionFormData {
  id: string
  name: string
  email: string
  phone?: string
  question: string
  type: "question" | "consultation" // Новий тип
  service?: string // Для консультацій
  createdAt: Date
  status: "new" | "read" | "replied"
}

interface ActionResult {
  success: boolean
  message: string
  data?: QuestionFormData
}

// Тимчасово зберігаємо запитання в пам'яті (в реальному проекті - база даних)
let questions: QuestionFormData[] = []

export async function submitQuestion(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const question = formData.get("question") as string

    // Валідація
    if (!name || name.trim().length < 2) {
      return {
        success: false,
        message: "Ім'я повинно містити принаймні 2 символи",
      }
    }

    if (!email || !isValidEmail(email)) {
      return {
        success: false,
        message: "Введіть коректний email адрес",
      }
    }

    if (!question || question.trim().length < 10) {
      return {
        success: false,
        message: "Запитання повинно містити принаймні 10 символів",
      }
    }

    const questionData: QuestionFormData = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || undefined,
      question: question.trim(),
      type: "question",
      createdAt: new Date(),
      status: "new",
    }

    // Зберігаємо запитання
    questions.unshift(questionData) // Додаємо на початок (нові зверху)

    console.log(`🩺 Нове запитання від ${questionData.name} (${questionData.email})`)

    return {
      success: true,
      message: "Ваше запитання успішно відправлено! Лікар зв'яжеться з вами найближчим часом.",
      data: questionData,
    }
  } catch (error) {
    console.error("❌ Помилка при обробці запитання:", error)
    return {
      success: false,
      message: "Виникла помилка при відправці запитання. Спробуйте ще раз або зв'яжіться з нами напряму.",
    }
  }
}

export async function submitConsultation(formData: {
  name: string
  phone: string
  email?: string
  service: string
  message: string
}): Promise<{ success: boolean; message: string; data?: QuestionFormData }> {
  try {
    // Валідація
    if (!formData.name || formData.name.trim().length < 2) {
      return {
        success: false,
        message: "Ім'я повинно містити принаймні 2 символи",
      }
    }

    if (!formData.phone || formData.phone.trim().length < 10) {
      return {
        success: false,
        message: "Введіть коректний номер телефону",
      }
    }

    if (!formData.service) {
      return {
        success: false,
        message: "Оберіть послугу",
      }
    }

    const consultationData: QuestionFormData = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: formData.name.trim(),
      email: formData.email?.trim().toLowerCase() || "",
      phone: formData.phone.trim(),
      question: `Послуга: ${formData.service}\n\nПовідомлення: ${formData.message || "Не вказано"}`,
      type: "consultation",
      service: formData.service,
      createdAt: new Date(),
      status: "new",
    }

    // Зберігаємо консультацію
    questions.unshift(consultationData)

    console.log(`📅 Новий запис на консультацію від ${consultationData.name} (${consultationData.phone})`)
    console.log(`🏥 Послуга: ${formData.service}`)

    return {
      success: true,
      message: "Ваш запис на консультацію успішно відправлено! Ми зв'яжемося з вами найближчим часом.",
      data: consultationData,
    }
  } catch (error) {
    console.error("❌ Помилка при записі на консультацію:", error)
    return {
      success: false,
      message: "Виникла помилка при записі на консультацію. Спробуйте ще раз або зв'яжіться з нами напряму.",
    }
  }
}

// Функція для отримання всіх запитань
export async function getAllQuestions(): Promise<QuestionFormData[]> {
  return questions
}

// Функція для оновлення статусу запитання
export async function updateQuestionStatus(id: string, status: "new" | "read" | "replied"): Promise<boolean> {
  const questionIndex = questions.findIndex(q => q.id === id)
  if (questionIndex !== -1) {
    questions[questionIndex].status = status
    return true
  }
  return false
}

// Функція для видалення запитання
export async function deleteQuestion(id: string): Promise<boolean> {
  const initialLength = questions.length
  questions = questions.filter(q => q.id !== id)
  return questions.length < initialLength
}

export async function getConsultations(): Promise<QuestionFormData[]> {
  return questions.filter(q => q.type === "consultation")
}

export async function getQuestions(): Promise<QuestionFormData[]> {
  return questions.filter(q => q.type === "question")
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
