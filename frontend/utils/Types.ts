/* Since we are using typescript, this file contain the types of all the data coming from the backend,
which we are going to use in our frontend
*/
export enum Role {
    freelancer = "freelancer",
    client = "client",
    admin = "admin"
  }
  
  export enum JobStatus {
    open = "open",
    in_progress = "in_progress",
    completed = "completed",
    cancelled = "cancelled"
  }
  
  export enum ApplicationStatus {
    pending = "pending",
    accepted = "accepted",
    rejected = "rejected"
  }
  
  export enum PaymentStatus {
    in_escrow = "in_escrow",
    released = "released",
    refunded = "refunded"
  }
  
  export interface Users {
    user_id: number;
    full_name?: string;
    email: string;
    phone_number?: string;
    password_hash?: string;
    role: Role;
    language_pref?: string;
    is_verified: boolean;
    created_at: string;
    Profiles?: Profiles[];
    Jobs?: Jobs[]; // ClientJobs
    Applications?: Applications[]; // FreelancerApplications
    ReviewsGiven?: Reviews[]; // Reviewer
    ReviewsReceived?: Reviews[]; // Reviewee
    PaymentsSent?: Payments[]; // ClientPayments
    PaymentsReceived?: Payments[]; // FreelancerPayments
    Notifications?: Notifications[];
    Freelancer_Skills?: Freelancer_Skills[];
    Admins?: Admins;
  }
  
  export interface Profiles {
    profile_id: number;
    user_id: number;
    bio?: string;
    skills?: string;
    experience?: string;
    rating_avg: number;
    completed_jobs: number;
    Users?: Users;
  }
  
  export interface Jobs {
    job_id: number;
    client_id: number;
    title: string;
    description?: string;
    category?: string;
    budget: number;
    status: JobStatus;
    location?: string;
    created_at: string;
    Users?: Users;
    Applications?: Applications[];
    Payments?: Payments[];
    Reviews?: Reviews[];
    Job_Skills?: Job_Skills[];
  }
  
  export interface Applications {
    application_id: number;
    job_id: number;
    freelancer_id: number;
    message?: string;
    status: ApplicationStatus;
    applied_at: string;
    Jobs?: Jobs;
    Users?: Users;
  }
  
  export interface Payments {
    payment_id: number;
    job_id: number;
    client_id: number;
    freelancer_id: number;
    amount: number;
    status: PaymentStatus;
    method?: string;
    paid_at?: string;
    Jobs?: Jobs;
    Client?: Users;
    Freelancer?: Users;
  }
  
  export interface Reviews {
    review_id: number;
    job_id: number;
    reviewer_id: number;
    reviewee_id: number;
    rating: number;
    comment?: string;
    created_at: string;
    Jobs?: Jobs;
    Reviewer?: Users;
    Reviewee?: Users;
  }
  
  export interface Notifications {
    notification_id: number;
    user_id: number;
    type?: string;
    content?: string;
    is_read: boolean;
    sent_at: string;
    Users?: Users;
  }
  
  export interface Job_Skills {
    job_id: number;
    skill_name: string;
    Jobs?: Jobs;
  }
  
  export interface Freelancer_Skills {
    freelancer_id: number;
    skill_name: string;
    Users?: Users;
  }
  
  export interface Admins {
    admin_id: number;
    user_id: number;
    privileges?: string;
    Users?: Users;
  }
  