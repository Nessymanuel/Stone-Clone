import { FacebookIcon, Instagram, Linkedin, TwitterIcon, YoutubeIcon } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-zinc-900">
      <div className="mx-24 py-5">
        <div className="flex items-center justify-between">
          <div>
            <a href="">
              <h1 className="text-3xl text-green-500">Stone</h1>
            </a>
          </div>
          <div className="flex gap-4 ">
            <a href="">
              <FacebookIcon size={24} color="white" />
            </a>
            <a href="">
              <TwitterIcon size={24} color="white" />
            </a>
            <a href="">
              <Instagram size={24} color="white" />
            </a>
            <a href="">
              <Linkedin size={24} color="white" />
            </a>
            <a href="">
              <YoutubeIcon size={24} color="white" />
            </a>
          </div>
        </div>
        <div className="text-white flex gap-14 font-semibold mt-10 ">
          <ul className="">
            <th className="font-semibold text-sm pb-2 text-zinc-500">PRO SEU NEGÓCIO</th>
            <li className="pb-1">
              <a href="">Planos</a>
            </li>
            <li className="pb-1">
              <a href="">Maquininha</a>
            </li>
            <li className="pb-1">
              <a href="">Conta PJ Stone</a>
            </li>
            <li className="pb-1">
              <a href="">Capital de Giro Stone</a>
            </li>
            <li className="pb-1">
              <a href="">Seguro de Loja</a>
            </li>
            <li className="pb-1">
              <a href="">Seguro de Vida</a>
            </li>
          </ul>
          <ul className="">
            <th className="font-semibold text-sm pb-2 text-zinc-500">FACILITE SUA ROTINA</th>
            <li className="pb-1">
              <a href="">Cartão Stone</a>
            </li>
            <li className="pb-1">
              <a href="">Link de Pagamento</a>
            </li>
            <li className="pb-1">
              <a href="">Pix</a>
            </li>
            <li className="pb-1">
              <a href="">Antecipação</a>
            </li>
            <li className="pb-1">
              <a href="">Controle</a>
            </li>
          </ul>
          <ul className="">
            <th className="font-semibold text-sm pb-2 text-zinc-500">PRA VOCÊ QUE É AUTÔNOMO</th>
            <li className="pb-1">
              <a href="">Ton</a>
            </li>
            <th className="font-semibold text-sm pb-2 text-zinc-500 mt-5">MAIS SOLUÇÕES</th>
            <li className="pb-1">
              <a href="">E-commerce</a>
            </li>
            <li className="pb-1">
              <a href="">Raio X</a>
            </li>
          </ul>
          <ul className="">
            <th className="font-semibold text-sm pb-2 text-zinc-500">STONE</th>
            <li className="pb-1">
              <a href="">Por que Stone</a>
            </li>
            <li className="pb-1">
              <a href="">Nossa História</a>
            </li>
            <li className="pb-1">
              <a href="">Trabalhe Conosco</a>
            </li>
            <li className="pb-1">
              <a href="">Parcerias</a>
            </li>
            <li className="pb-1">
              <a href="">Seja um franqueado</a>
            </li>
            <li className="pb-1">
              <a href="">Investidores</a>
            </li>
            <li className="pb-1">
              <a href="">Blog Stone</a>
            </li>
          </ul>
          <ul className="">
            <th className="font-semibold text-sm pb-2 text-zinc-500">ATENDIMENTO</th>
            <li className="pb-1">
              <a href="">Entre em contato</a>
            </li>
            <li className="pb-1">
              <a href="">Central de Ajuda</a>
            </li>
            <li className="pb-1">
              <a href="">Já sou cliente</a>
            </li>
            <li className="pb-1">
              <a href="">Seja nosso cliente</a>
            </li>
            <li className="pb-1">
              <a href="">Ouvidoria</a>
            </li>
            <li className="pb-1">
              <a href="">Orelhão Stone</a>
            </li>
          </ul>
          <ul className="">
            <th className="font-semibold text-sm pb-2 text-zinc-500 break-words">INSTITUCIONAL</th>
            <li className="pb-1">
              <a href="">Segurança</a>
            </li>
            <li className="pb-1">
              <a href="">Contrato</a>
            </li>
            <li className="pb-1">
              <a href="">Desenvolvedores</a>
            </li>
            <li className="pb-1">
              <a href="">Demonstrações Financeiras</a>
            </li>
            <li className="pb-1">
              <a href="">Aviso de Privacidade</a>
            </li>
            <li className="pb-1">
              <a href="">Portal de Privacidade</a>
            </li>
            <li className="pb-1">
              <a href="">Política de Cookies</a>
            </li>
            <li className="pb-1">
              <a href="">Política de Segurança</a>
            </li>
            <li className="pb-1">
              <a href="">Política Institucional de PLD-CFT</a>
            </li>
            <li className="pb-1">
              <a href="">Política de Educação Financeira</a>
            </li>
            <li className="pb-1">
              <a href="">Política de RSAC</a>
            </li>
            <li className="pb-1">
              <a href="">Relatório GRSAC</a>
            </li>
            <li className="pb-1">
              <a href="">Transparência e Igualdade Salarial</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="font-semibold text-white mx-24 text-sm pt-10 pb-10">
          <p>Stone Instituição de Pagamento S.A. CNPJ 16.501.555/0001-57</p>
          <p>Av. Doutora Ruth Cardoso, 7221, 20° andar, Pinheiros, CEP 05425-902 - São Paulo/SP </p>
          <p>Instituição de pagamento autorizada pelo Banco Central do Brasil, nas modalidades de credenciadora e emissora de moeda eletrônica.</p>
        </div>
      </div>
      <div>
        <div className="flex justify-end">
          <div className=" mr-10 pt-2 pb-5">
            <h1 className="text-3xl text-white">Stone</h1>
          </div>
          
        </div>
       
      </div>


    </div>
  );
}
