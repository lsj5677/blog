export type StateBannerProps = {
  message: string;
  state: "success" | "error";
};
export default function StateBanner({
  stateBanner: { message, state },
}: {
  stateBanner: StateBannerProps;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "😎" : "👻";
  return (
    <span
      className={`absolute left-1/2 top-10 w-full -translate-x-1/2 p-5 text-center text-main ${isSuccess ? "bg-blue" : "bg-red"}`}
    >{`${icon} ${message}`}</span>
  );
}
