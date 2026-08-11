import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useRef, useState } from "react"
import { LoaderCircle } from "lucide-react";
import Success from "../components/Success";

export default function Contact() {
    interface ErrorsType {
        name: string;
        email: string;
        title: string;
        content: string;
    }
    
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const title = useRef<HTMLInputElement>(null);
    const content = useRef<HTMLTextAreaElement>(null);

    const [error, setError] = useState<ErrorsType>({
        name: "",
        email: "",
        title: "",
        content: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const nameVal = name.current?.value.trim() || "";
        const emailVal = email.current?.value.trim() || "";
        const titleVal = title.current?.value.trim() || "";
        const contentVal = content.current?.value.trim() || "";

        const newErrors: ErrorsType = {
            name: "",
            email: "",
            title: "",
            content: ""
        };

        if (!nameVal) newErrors.name = "Vui lòng nhập họ và tên";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVal) newErrors.email = "Vui lòng nhập email";
        else if (!emailRegex.test(emailVal)) newErrors.email = "Email không đúng định dạng";

        if (!titleVal) newErrors.title = "Vui lòng nhập tiêu đề";

        if (!contentVal) newErrors.content = "Vui lòng nhập nội dung";
        else if (contentVal.length < 20) newErrors.content = "Nội dung tối thiểu 20 ký tự";

        if (newErrors.name || newErrors.email || newErrors.title || newErrors.content) {
            setError(newErrors);
            return;
        }

        setError({ name: "", email: "", title: "", content: "" });
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);

            if (name.current) name.current.value = "";
            if (email.current) email.current.value = "";
            if (title.current) title.current.value = "";
            if (content.current) content.current.value = "";
        }, 2000);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSuccess(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [isSuccess]);

    const inputClass = "w-full border-2 border-gray-200 dark:border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-gray-400 dark:focus:border-indigo-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 transition-colors";

    return (
        <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header/>

            <main className="mb-8 mt-2 flex flex-col items-center gap-4 px-4 md:px-10
            xl:max-w-6xl xl:mx-auto">
                <section className="flex flex-col items-center w-full my-2 gap-4">
                    <p className="text-[#3730a3] dark:text-indigo-400 font-semibold text-xl xl:hidden">Liên hệ</p>

                    <p className="text-left w-full text-gray-600 dark:text-gray-400">
                        Điền các thông tin dưới đây để kết nối với tôi
                    </p>

                    <form id="form-contact" name="form-contact"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 w-full my-2">
                        <div className="flex flex-col gap-2 items-start">
                            <label htmlFor="name"
                            className="font-semibold text-gray-700 dark:text-gray-300">
                                Họ và tên
                            </label>
                            <input type="text" id="name" name="name" placeholder="Họ và tên"
                            className={inputClass}
                            ref={name}
                            autoComplete="name"/>

                            {error.name && <p className="text-red-500 text-left">{error.name}</p>}
                        </div>
                        
                        <div className="flex flex-col gap-2 items-start">
                            <label htmlFor="email" 
                            className="font-semibold text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input type="text" id="email" name="email" placeholder="Email"
                            className={inputClass}
                            ref={email}
                            autoComplete="email"/>

                            {error.email && <p className="text-red-500 text-left">{error.email}</p>}
                        </div>
                        
                        <div className="flex flex-col gap-2 items-start">
                            <label htmlFor="title"
                            className="font-semibold text-gray-700 dark:text-gray-300">
                                Tiêu đề
                            </label>
                            <input type="text" id="title" name="title" placeholder="Tiêu đề"
                            className={inputClass}
                            ref={title}
                            autoComplete="title"/>

                            {error.title && <p className="text-red-500 text-left">{error.title}</p>}
                        </div>
                        
                        <div className="flex flex-col gap-2 items-start">
                            <label htmlFor="content" className="font-semibold text-gray-700 dark:text-gray-300">
                                Nội dung
                            </label>
                            <textarea id="content" name="content" placeholder="Nội dung"
                            className={inputClass}
                            ref={content}
                            autoComplete="content"
                            rows={4}/>

                            {error.content && <p className="text-red-500 text-left">{error.content}</p>}
                        </div>

                        <button type="submit"
                        className="bg-[#3730a3] dark:bg-indigo-600 text-white rounded-md py-2 my-4
                        hover:bg-[#1e1b4b] dark:hover:bg-indigo-700 transition-colors w-full flex items-center 
                        justify-center cursor-pointer font-bold">
                            {isLoading ? 
                                <LoaderCircle className="animate-spin p-0" 
                                size={20} strokeWidth={3}/> : 
                                "Gửi"
                            }
                        </button>
                    </form>
                </section>
            </main>

            <Success
                message="Gửi mail thành công"
                isVisible={isSuccess}
            />

            <Footer/>
        </div>
    )
}