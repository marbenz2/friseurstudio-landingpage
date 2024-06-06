const Container = ({
  children,
  left = false,
}: {
  children: React.ReactNode;
  left?: boolean;
}) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-t from-foreground/5 to-transparent items-center overflow-clip z-0">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="0 0 1280 1034"
        className={`absolute -bottom-24 ${
          left ? "-left-12 -scale-x-100" : "-right-12"
        } opacity-5 max-w-4xl -z-10`}
      >
        <path d="m140.8 1.2-2.6 1.3L275.6 158c75.6 85.5 139 157.6 140.9 160.3l3.5 4.7-3.7-.5c-17-2.6-415.8-55.3-416.1-55-.2.2.2 2.1.8 4.2 1.8 5.5 16.3 19.5 28.5 27.5 19.6 12.9 47.5 26.8 79 39.2 21.9 8.7 98.9 33.5 100.1 32.3.2-.2-2.3-1.2-5.6-2.2-3.3-1-5.8-2-5.6-2.2.2-.2 7.3 1.7 15.7 4.1 29.5 8.6 143.6 40.1 180.1 49.7 7 1.8 12.5 3.5 12.3 3.7-.2.3-2.5-.1-5-.8-2.5-.7-4.8-1.1-5-.8-.8.7 48.3 13 85 21.3 13.9 3.1 57.4 12.5 58 12.5.1 0 8.1 8.9 17.8 19.7 19.1 21.6 40.4 43.8 107.1 112 71.6 73 120.8 126.5 129.9 141.1 6.1 9.8 10.2 18.7 12.2 26.1 2 7.7 1.9 9.6-.6 14.8-1.9 3.9-3 4.8-10.3 8.2-29.8 13.8-55.7 43.2-66.1 75.3-4.7 14.5-6.5 25.7-6.5 40.8 0 27.4 7.1 49.2 25 76.9 8.1 12.4 25.5 30.2 37.4 38.2 41.4 27.7 86.4 32.2 128.2 12.9 16.7-7.7 36.2-23.1 46.8-36.9 26.5-34.6 31.2-83.2 11.8-121.7-5.6-11-14.9-23.4-41.5-55.3-4.3-5.2-31.4-34.7-60.1-65.5-56.5-60.5-65-70.1-91.7-102.1-37.2-44.8-62.6-77-74.4-94.5-13.4-20-26.7-49.2-28.2-62.2-.3-2.6 0-8.2.7-12.3l1.3-7.5 9.6-9.3c9.4-9.1 9.8-9.4 19.3-12.5 18.8-6.2 30.7-7.7 62.8-7.7 15.7 0 34.8.6 42.5 1.3 7.7.7 23.9 2.2 36 3.3 63.2 5.6 81.6 8.1 177 23.4 42.4 6.8 81.7 12.8 87.5 13.4 43.9 4.5 58.4 5 72.6 2.6 40.5-7.1 75.6-36.9 88.7-75.5 7.5-22 8.6-48.9 3.1-71.5-9.2-37-33.4-65.6-70.9-84.1-17.6-8.7-41.4-14.4-59.6-14.4-8 0-26.7 1.7-33.9 3.1-25.5 4.8-48.5 17.4-66.8 36.3-17.8 18.5-28.9 39.7-34.3 65.9-2.5 12.1-2.9 32.4-.9 43.2 1.2 6.7 1.1 7.3-.9 11.3-3.9 7.6-13.8 11.5-34.5 13.3-9.6.8-14.2.7-24.5-.6-48.1-6.1-98.1-14.5-197.4-33.1-75.9-14.2-96.9-17.8-126.7-21.9-14-1.9-26.1-3.5-26.8-3.5-.7 0-10.4-8.9-21.5-19.7-41.6-40.5-69.1-65.3-147.1-132.8-57.4-49.6-96.7-83-119.8-101.8-56-45.5-104.5-76-139.8-87.8C157.7.5 145.5-1 140.8 1.2zm1019.1 264.4c14.7 1.7 21.5 3.6 33.6 9.7 37.5 18.7 57.5 52.3 55.2 92.6-2.1 35.5-21.2 61.6-53.9 73.9-18.7 7-32.7 9.1-49.6 7.2-38.4-4-57.2-10.3-75.7-25-12.7-10.1-23.3-26.2-27.4-41.8-10-37.2 10.1-83 45.9-104.6 9-5.5 23.2-11.2 31.2-12.5 8.6-1.4 26.3-1.2 40.7.5zm-967.2 99c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm217 60c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm4 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm446.8 376.3c10.9 2.8 26.4 10.7 36.3 18.7 8.5 6.8 26 25.3 34 35.9 12 15.9 20.1 40.8 20.2 61.3 0 28.7-13.1 51.9-39.5 69.3-32 21.2-68.8 21.2-104.5.2-11.4-6.7-20.9-16-32.8-31.8-15.8-21.1-21.1-36-21.2-59.3 0-27.8 9.6-52 28.2-71.1 17.8-18.2 38.3-26.7 61.8-25.6 5.2.2 13.1 1.3 17.5 2.4z" />
        <path d="M387.8 420.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM391.8 421.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6z" />
      </svg>
    </div>
  );
};

export default Container;
