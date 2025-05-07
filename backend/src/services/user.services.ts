import prisma from "../../prisma/Generator"

export async function LoginMemberService(Email: string, Password: string) {
   //fetching the user from Prisma
    try {
        return await prisma.users.findFirstOrThrow({
            where: {
                AND: {
                    email: Email,
                    password_hash: Password,
                }
            },
            select: {
                user_id: true,
                full_name: true,
                email: true,
                phone_number: true,
                password_hash: true,
                role: true,
                language_pref: true,
                is_verified: true,
                created_at: true,
                Profiles: true,
                Jobs: true,
                Applications: true,
                ReviewsGiven: true,
                ReviewsReceived: true,
                PaymentsSent: true,
                PaymentsReceived: true,
                Notifications: true,
                Freelancer_Skills: true,
                Admins: true,
                _count: true
            }
        })
    } catch (error) {
        throw error
    }
}