import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-cente bg-red-600 text-white">
        <div className="flex flex-col items-center py-4 container">
          <p className="font-bold text-xl">
            E-Commerce Farmácia | Larissa Angioni | Copyright: {data}
          </p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/larissaangioni/"
              target="_blank"
            >
              <LinkedinLogo size={48} />
            </a>
            <a href="https://github.com/larissaangioni" target="_blank">
              <GithubLogo size={48} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
