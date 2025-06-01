import SocialLinks from "./SocialLinks";

const Footer = () => {
  const footerSections = [
    {
      title: "Lorem ipsum dolor",
      links: [
        "Lorem ipsum dolor sit",
        "Nesciunt itaque alias possimus",
        "Optio rerum beatae autem",
        "Nostrum nemo dolorum facilis",
        "Quo fugit dolor totam",
      ],
    },
    {
      title: "Culpa quia, nesciunt",
      links: [
        "Lorem ipsum dolor sit",
        "Reiciendis dicta laboriosam enim",
        "Corporis, non aut rerum",
        "Laboriosam nulla voluptas, harum",
        "Facere eligendi, inventore dolor",
      ],
    },
    {
      title: "Neque, dolore, facere",
      links: [
        "Lorem ipsum dolor sit",
        "Distinctio, inventore quidem nesciunt",
        "Explicabo inventore itaque autem",
        "Aperiam harum, sint quibusdam",
        "Labore excepturi assumenda",
      ],
    },
    {
      title: "Illum, temporì, saepe",
      links: [
        "Lorem ipsum dolor sit",
        "Recusandae, culpa necessitatibus nam",
        "Cupiditate, debitis adipisci blandit",
        "Tempore nam, enim quia",
        "Explicabo molestiae dolor labore",
      ],
    },
  ];

  return (
    <footer className="bg-slate-700 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-medium text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © Untitled. All rights reserved. Design: TEMPLATED. Images:
            Unsplash
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
