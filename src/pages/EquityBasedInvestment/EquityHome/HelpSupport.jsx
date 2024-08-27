import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HelpSupport = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <section className="flex flex-col min-h-screen">
            {/* Header Section */}
            <div className="flex justify-end gap-3 px-5 md:px-0 pt-5">
                <div className="flex items-center gap-3">
                    <span className="bg-blue-100 rounded-full p-2">
                        <FaBell className="text-xl text-blue-700" />
                    </span>
                    <div className="flex items-center rounded-full gap-3">
                        <Avatar className="w-10 h-10 md:w-12 md:h-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="text-gray-500 text-sm">
                            <p className="font-extrabold">Al Mamud Bijoy</p>
                            <p>User Id: 457</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Section End */}

            <div className="flex-grow flex items-center justify-center px-2 md:px-0">
                <div className="bg-white flex flex-col justify-center rounded-lg border-2 w-full md:w-2/3 py-10">
                    <p className="text-center text-xl md:text-3xl md:pb-5 font-bold">Help and Support</p>
                    <form className="w-full md:w-2/3 px-5 md:px-0 mx-auto mt-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <div className="flex flex-col gap-3">
                                <Label className="block text-black font-medium text-base md:text-lg">Email</Label>
                                <Input
                                    type="text"
                                    placeholder="Type Your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-sm bg-[#E3E7ED] focus:outline-none focus:ring focus:ring-pink-300"
                                    {...register('email', { required: "Email is required" })}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                
                                <Label className="block text-black text-base md:text-lg mt-3">Mobile Number</Label>
                                <Input
                                    type='number'
                                    placeholder="+8801"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-pink-300 pr-10 bg-[#E3E7ED]"
                                    {...register('contact', { required: "Mobile number is required" })}
                                />
                                {errors.contact && <span className="text-red-500 text-sm">{errors.contact.message}</span>}
                                
                                <Label className="block text-black font-medium text-base md:text-lg mt-3">Describe Complaint</Label>
                                <Textarea
                                    placeholder="Write down your complaint"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-sm bg-[#E3E7ED] focus:outline-none focus:ring focus:ring-pink-300"
                                    {...register('complaint', { required: "Complaint is required" })}
                                />
                                {errors.complaint && <span className="text-red-500 text-sm">{errors.complaint.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 pt-8 px-8 md:px-32">
                            <Button
                                type="button"
                                className="w-1/2 bg-[#F1F1F1] text-[#522F8F] text-base font-bold py-1 rounded-md hover:bg-[#F1F1F1] transition-colors"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="w-1/2 bg-[#522F8F] text-white text-base font-bold py-1 rounded-md hover:bg-[#522F8F] transition-colors"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HelpSupport;

