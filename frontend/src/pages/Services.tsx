import Header from "../components/Header";
import { Card, CardContent } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { useGetAllServicesQuery } from "../API/ServiceSlice";

type Job = {
    job_id: number;
    title: string;
    description?: string;
    category?: string;
    budget: string;
    status: string;
    location?: string;
    created_at: string;
};

export default function Services() {
    const { data: services, isLoading, isError } = useGetAllServicesQuery({});
    return (
        <>
            <Header />
            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">🛠️ Posted Services</h1>

                {isLoading ? (
                    <p className="text-center text-gray-500">Loading services...</p>
                ) : isError ? (
                    <p className="text-center text-red-500">Failed to load services.</p>
                ) : (
                    <div className="flex flex-wrap gap-6 justify-center">
                        {services?.map((job: Job) => (
                            <Card
                                key={job.job_id}
                                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] hover:shadow-lg transition-shadow duration-300 border rounded-2xl"
                            >
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className="text-2xl font-semibold">{job.title}</h2>
                                            <p className="text-sm text-muted-foreground">{job.category || "Uncategorized"}</p>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            {new Date(job.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-base text-gray-700">{job.description || "No description provided."}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                            {job.status}
                                        </span>
                                        {job.location && (
                                            <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {job.location}
                                            </span>
                                        )}
                                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                                            ${job.budget}
                                        </span>
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
                )}
            </div>
        </>
    );
}
