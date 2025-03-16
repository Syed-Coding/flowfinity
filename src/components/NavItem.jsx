
const NavItem = ({ icon: Icon, label, active, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${active
                    ? "bg-cyan-50 text-cyan-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
        >
            <Icon className="w-5 h-5" />
            <span className="text-sm">{label}</span>
        </div>
    )
}



export default NavItem
