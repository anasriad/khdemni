import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create Users
  const users = [];
  for (let i = 0; i < 10; i++) {
    const role = faker.helpers.arrayElement(['freelancer', 'client', 'admin'] as const);
    const user = await prisma.users.create({
      data: {
        full_name: faker.person.fullName(),
        email: faker.internet.email(),
        phone_number: faker.phone.number(),
        password_hash: faker.internet.password(),
        role,
        language_pref: faker.helpers.arrayElement(['en', 'fr', 'ar']),
        is_verified: faker.datatype.boolean(),
      },
    });
    users.push(user);
  }

  // Create Profiles for freelancers
  for (const user of users.filter(u => u.role === 'freelancer')) {
    await prisma.profiles.create({
      data: {
        user_id: user.user_id,
        bio: faker.lorem.paragraph(),
        skills: faker.helpers.arrayElements(['JavaScript', 'React', 'SQL', 'Node.js'], 2).join(', '),
        experience: faker.lorem.sentences(2),
      },
    });
  }

  // Create Jobs for clients
  const jobs = [];
  for (const client of users.filter(u => u.role === 'client')) {
    const job = await prisma.jobs.create({
      data: {
        client_id: client.user_id,
        title: faker.commerce.productName(),
        description: faker.lorem.sentences(2),
        category: faker.commerce.department(),
        budget: parseFloat(faker.finance.amount()),
        status: faker.helpers.arrayElement(['open', 'in_progress', 'completed', 'cancelled']),
        location: faker.location.city(),
      },
    });
    jobs.push(job);

    // Add Job Skills
    const skillList = faker.helpers.arrayElements(['JavaScript', 'React', 'SQL', 'Node.js'], 2);
    for (const skill of skillList) {
      await prisma.job_Skills.create({
        data: {
          job_id: job.job_id,
          skill_name: skill,
        },
      });
    }
  }

  // Applications by freelancers
  for (const freelancer of users.filter(u => u.role === 'freelancer')) {
    for (let i = 0; i < 2; i++) {
      const job = faker.helpers.arrayElement(jobs);
      await prisma.applications.create({
        data: {
          job_id: job.job_id,
          freelancer_id: freelancer.user_id,
          message: faker.lorem.sentences(1),
          status: faker.helpers.arrayElement(['pending', 'accepted', 'rejected']),
        },
      });
    }

    // Add Freelancer Skills
    const skillSet = faker.helpers.arrayElements(['JavaScript', 'React', 'SQL', 'Node.js'], 2);
    for (const skill of skillSet) {
      await prisma.freelancer_Skills.create({
        data: {
          freelancer_id: freelancer.user_id,
          skill_name: skill,
        },
      });
    }
  }

  // Payments
  for (const job of jobs) {
    const client = users.find(u => u.user_id === job.client_id);
    const freelancer = faker.helpers.arrayElement(users.filter(u => u.role === 'freelancer'));
    await prisma.payments.create({
      data: {
        job_id: job.job_id,
        client_id: client!.user_id,
        freelancer_id: freelancer.user_id,
        amount: parseFloat(faker.finance.amount()),
        status: faker.helpers.arrayElement(['in_escrow', 'released', 'refunded']),
        method: faker.helpers.arrayElement(['paypal', 'bank_transfer', 'credit_card']),
        paid_at: faker.date.recent(),
      },
    });
  }

  // Reviews
  for (let i = 0; i < 10; i++) {
    const job = faker.helpers.arrayElement(jobs);
    const reviewer = faker.helpers.arrayElement(users);
    let reviewee = faker.helpers.arrayElement(users.filter(u => u.user_id !== reviewer.user_id));

    await prisma.reviews.create({
      data: {
        job_id: job.job_id,
        reviewer_id: reviewer.user_id,
        reviewee_id: reviewee.user_id,
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
      },
    });
  }

  // Notifications
  for (const user of users) {
    await prisma.notifications.create({
      data: {
        user_id: user.user_id,
        type: faker.helpers.arrayElement(['job_alert', 'application_status', 'payment']),
        content: faker.lorem.sentence(),
        is_read: faker.datatype.boolean(),
      },
    });
  }

  // Admins
  for (const admin of users.filter(u => u.role === 'admin')) {
    await prisma.admins.create({
      data: {
        user_id: admin.user_id,
        privileges: 'all_access',
      },
    });
  }
}

main()
  .then(() => {
    console.log('✅ Seeding complete');
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error('❌ Seeding error:', error);
    prisma.$disconnect();
    process.exit(1);
  });
