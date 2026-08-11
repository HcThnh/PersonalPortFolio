export interface ProjectItem {
    title: string;
    role: string;
    date: string;
    description: string[];
    technologies: string[];
    github: string;
    demo?: string;
    image: string;
}

export const projectsData: ProjectItem[] = [
    {
        title: "Hệ thống Quản lý Cửa hàng & Dịch vụ",
        role: "Frontend Developer",
        date: "07/2026",
        description: [
            "Lập trình các chức năng Frontend theo tài liệu giải pháp chi tiết, xây dựng giao diện phân quyền 3 cấp mượt mà.",
            "Sử dụng AJAX / Asynchronous JavaScript tích hợp chặt chẽ hệ thống RESTful API từ backend Spring Boot.",
            "Vận dụng tư duy logic - thuật toán gỡ lỗi client-side, đảm bảo luồng xử lý dữ liệu chính xác và ổn định."
        ],
        technologies: ["JavaScript", "ReactJS", "HTML5", "CSS3", "AJAX", "Spring Boot", "MySQL"],
        github: "https://github.com/HcThnh/CoffeeShop",
        demo: "https://www.youtube.com/",
        image: "/coffeeshop.webp"
    },
    {
        title: "Hệ thống Quản lý Sản xuất Doanh nghiệp (MES Mini)",
        role: "Frontend Developer",
        date: "08/2025 – 06/2026",
        description: [
            "Phân tích tài liệu giải pháp (sơ đồ Use-case, Sequence diagram) và trực tiếp chuyển hóa thành các chức năng Frontend hoàn chỉnh.",
            "Xây dựng các component giao diện có tính tái sử dụng cao, tối ưu hóa hiển thị dữ liệu thời gian thực.",
            "Phối hợp chặt chẽ với các thành viên trong nhóm dự án, tham gia vào quy trình phát triển và kiểm thử phần mềm."
        ],
        technologies: ["JavaScript", "ReactJS", "Node.js", "Express", "PostgreSQL", "Docker", "REST API"],
        github: "https://github.com/ironmanthang/mes-mini",
        demo: "https://www.youtube.com/",
        image: "/mes_mini.webp"
    }
];
