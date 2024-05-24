interface Props {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => (
  <div className="bg-logo-blue w-80 rounded p-4 text-white shadow-md">
    {children}
  </div>
)

export default Card
