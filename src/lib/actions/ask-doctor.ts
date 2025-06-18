"use server"

interface QuestionFormData {
  name: string
  email: string
  phone?: string
  question: string
}

interface ActionResult {
  success: boolean
  message: string
  data?: QuestionFormData
}

export async function submitQuestion(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  try {
    // Отримуємо дані з форми
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

    // Підготовка даних
    const questionData: QuestionFormData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || undefined,
      question: question.trim(),
    }

    // Симуляція відправки (замініть на реальну логіку)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Тут можна додати:
    // 1. Збереження в базу даних
    // 2. Відправка email лікарю
    // 3. Відправка підтвердження користувачу
    // 4. Інтеграція з CRM системою

    console.log("Нове запитання від пацієнта:", questionData)

    // Приклад відправки email (потрібно налаштувати email сервіс)
    // await sendEmailToDoctor(questionData)
    // await sendConfirmationToPatient(questionData)

    return {
      success: true,
      message: "Ваше запитання успішно відправлено! Лікар зв'яжеться з вами найближчим часом.",
      data: questionData,
    }
  } catch (error) {
    console.error("Помилка при обробці запитання:", error)
    return {
      success: false,
      message: "Виникла помилка при відправці запитання. Спробуйте ще раз або зв'яжіться з нами напряму.",
    }
  }
}

// Допоміжна функція для валідації email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Приклад функції для відправки email лікарю
// async function sendEmailToDoctor(data: QuestionFormData) {
//   // Інтеграція з email сервісом (Resend, SendGrid, Nodemailer тощо)
//   // const emailContent = `
//   //   Нове запитання від пацієнта:
//   //
//   //   Ім'я: ${data.name}
//   //   Email: ${data.email}
//   //   Телефон: ${data.phone || 'Не вказано'}
//   //
//   //   Запитання:
//   //   ${data.question}
//   // `
//   //
//   // await emailService.send({
//   //   to: 'doctor@example.com',
//   //   subject: 'Нове запитання від пацієнта',
//   //   text: emailContent
//   // })
// }

// Приклад функції для відправки підтвердження пацієнту
// async function sendConfirmationToPatient(data: QuestionFormData) {
//   // const confirmationContent = `
//   //   Шановний(а) ${data.name}!
//   //
//   //   Дякуємо за ваше запитання. Лікар розгляне його та зв'яжеться з вами найближчим часом.
//   //
//   //   З повагою,
//   //   Команда клініки
//   // `
//   //
//   // await emailService.send({
//   //   to: data.email,
//   //   subject: 'Підтвердження отримання запитання',
//   //   text: confirmationContent
//   // })
// }
