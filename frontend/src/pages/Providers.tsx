import React from "react";
import Header from "../components/Header";
import { Card, CardContent } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";

type Job = {
  id: number;
  title: string;
  company: string;
  description: string;
  skills: string[];
  postedAt: string;
};

const Providers: React.FC = () => {
  const jobPostings: Job[] = [
    {
      id: 1,
      title: "Part-Time Gardener",
      company: "GreenLeaf Landscaping Co.",
      description:
        "Seeking a reliable gardener for weekly maintenance of private gardens in the downtown area. Must be familiar with pruning, seasonal planting, and pest control. Tools and transportation provided.",
      skills: ["Gardening", "Plant Care", "Punctuality", "Landscaping", "Time Management"],
      postedAt: "Posted 2 days ago",
    },
    {
      id: 2,
      title: "Evening Babysitter",
      company: "The Reynolds Family",
      description:
        "Looking for a warm and responsible babysitter for two energetic children (ages 3 & 6). Tasks include preparing simple meals, bedtime routines, and engaging in light educational play. 3 evenings a week, 6 PM to 10 PM.",
      skills: ["Childcare", "CPR Certified", "Patience", "Meal Preparation", "Storytelling"],
      postedAt: "Posted 1 day ago",
    },
    {
      id: 3,
      title: "Dog Walker",
      company: "Happy Tails Pet Services",
      description:
        "Need a dog lover for weekday morning walks for 2 medium-sized dogs. Dogs are friendly but active. Ideal candidate should have experience with large dogs and be comfortable walking in all weather.",
      skills: ["Pet Care", "Reliability", "Time Management", "Canine Handling", "Outdoor Endurance"],
      postedAt: "Posted 3 hours ago",
    },
    {
      id: 4,
      title: "House Cleaner",
      company: "Sparkle & Shine Cleaning",
      description:
        "Offering flexible hours for part-time home cleaning jobs. Responsibilities include vacuuming, dusting, bathroom/kitchen sanitization, and laundry. Must be detail-oriented, professional, and trustworthy.",
      skills: ["Cleaning", "Attention to Detail", "Trustworthy", "Laundry", "Organization"],
      postedAt: "Posted 5 days ago",
    },
    {
      id: 5,
      title: "Freelance Graphic Designer",
      company: "PixelPerfect Studios",
      description:
        "Looking for a creative freelance designer to work on social media assets, marketing brochures, and logo design. Must have a strong portfolio and experience with Adobe Creative Suite. Remote-friendly.",
      skills: ["Graphic Design", "Adobe Illustrator", "Creativity", "Branding", "Communication"],
      postedAt: "Posted today",
    },
    {
      id: 6,
      title: "Home Tutor - Mathematics (High School)",
      company: "Bright Minds Tutoring",
      description:
        "Seeking a tutor to assist a high school junior with advanced mathematics (Algebra II, Pre-Calc). 3 sessions a week, 90 minutes each. Must be patient, clear in explanations, and have tutoring experience.",
      skills: ["Math Teaching", "Patience", "Clear Communication", "Problem Solving", "Time Commitment"],
      postedAt: "Posted 3 hours ago",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">🌟 Freelance Job Board</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {jobPostings.map((job) => (
            <Card
              key={job.id}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] hover:shadow-lg transition-shadow duration-300 border rounded-2xl"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-semibold">{job.title}</h2>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-500">{job.postedAt}</span>
                </div>
                <p className="text-base text-gray-700">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="pt-3 text-right">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Providers;
