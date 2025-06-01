import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  const socialLinks = [
    { name: "Facebook", icon: "Facebook", color: "bg-blue-600" },
    { name: "Twitter", icon: "Twitter", color: "bg-sky-500" },
    { name: "Google+", icon: "Globe", color: "bg-red-600" },
    { name: "LinkedIn", icon: "Linkedin", color: "bg-blue-700" },
  ];

  return (
    <div className="flex space-x-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href="#"
          className={`${link.color} p-2 rounded-sm hover:opacity-80 transition-opacity`}
          aria-label={link.name}
        >
          <Icon name={link.icon} size={16} className="text-white" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
