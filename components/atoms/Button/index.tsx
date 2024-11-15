const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="bg-[#F3931B] p-4 rounded-3xl text-white items-end w-fit"
    >
      {children}
    </button>
  );
};

export default Button;