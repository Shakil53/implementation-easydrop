import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaBell } from "react-icons/fa";

const RequestPayment = () => {
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
                <div className="bg-white flex flex-col justify-center rounded-lg md:border-2 w-full md:w-2/3 py-12">
                    <div className="text-center pb-8">
                        <img src="https://i.ibb.co/JRHSrS3/new-sitelogo.png" alt="" className="mx-auto w-[120px] md:w-[200px]" />
                    </div>

                    <div className="mx-auto w-full md:w-2/6 px-4 md:px-0">
                        <RadioGroup className="space-y-4">
                            <div className="flex items-center justify-between border rounded-lg p-4 w-full">
                                <div className="flex items-center space-x-2 gap-1">
                                    <span className="font-semibold">Payment by</span>
                                    <img src="https://i.ibb.co/cNxZ5SJ/bkash-logo.png" alt="" className="h-6" />
                                </div>
                                <RadioGroupItem value="bkash" className="h-5 w-5 border-2 border-gray-300" />
                            </div>

                            <div className="flex items-center justify-between border rounded-lg p-4">
                                <div className="font-semibold">Payment by Bank</div>
                                <RadioGroupItem value="bank" className="h-5 w-5 border-2 border-gray-300" />
                            </div>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RequestPayment;
