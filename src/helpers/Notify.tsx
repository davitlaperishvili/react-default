import { toast } from "react-toastify";
const notify = (status, string) => {
    switch (status) {
        case "danger":
            toast.error(string);
            break;

        case "success":
            toast.success(string);
            break;

        case "warning":
            toast.warning(string);
            break;

        case "info":
            toast.info(string);
            break;

        default:
            toast("Something went wrong");
    }
};
export default notify;
