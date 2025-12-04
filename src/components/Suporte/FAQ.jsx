import React from "react";

export default function FAQ() {
  return (
    <section className="py-5" id="faq">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-question-circle"></i> Perguntas Frequentes
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="accordionFAQ">

              {/* FAQ 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    Como faço para me inscrever nas trilhas?
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    Para se inscrever nas trilhas, basta criar sua conta
                    clicando em <strong>"Cadastre-se"</strong> no menu superior.
                    Após completar o cadastro, você terá acesso ao dashboard
                    onde poderá escolher e se inscrever nas trilhas disponíveis.
                    Todo o processo é gratuito!
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accordion-button-secondary collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    As trilhas são totalmente gratuitas?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    Sim! Todas as trilhas da Rede NAVE são{" "}
                    <strong>100% gratuitas</strong>. Nossa missão é democratizar
                    o acesso ao conhecimento e empoderar mulheres empreendedoras
                    através da educação de qualidade.
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accordion-button-secondary collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    Como recebo o certificado?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    Ao concluir 100% das aulas de uma trilha e passar nas
                    avaliações com nota mínima de 70%, você receberá
                    automaticamente o certificado digital em seu dashboard. O
                    certificado pode ser baixado em PDF e compartilhado nas
                    redes sociais.
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accordion-button-secondary collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    Posso fazer mais de uma trilha ao mesmo tempo?
                  </button>
                </h2>
                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    Sim! Você pode se inscrever em quantas trilhas quiser e
                    estudar no seu próprio ritmo. Recomendamos focar em uma ou
                    duas trilhas por vez para melhor aproveitamento do conteúdo.
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accordion-button-secondary collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    Quanto tempo tenho para concluir uma trilha?
                  </button>
                </h2>
                <div
                  id="faq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    As trilhas não têm prazo de validade. Você pode estudar no
                    seu ritmo e pausar quando precisar. O conteúdo ficará
                    disponível para você por tempo indeterminado após a
                    inscrição.
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accordion-button-secondary collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                    Como participar dos eventos ao vivo?
                  </button>
                </h2>
                <div
                  id="faq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    Acesse a página de <strong>Eventos</strong> e clique no
                    botão "Participar" do evento desejado. Você receberá um link
                    de acesso por e-mail 1 hora antes do início. Os eventos são
                    transmitidos ao vivo via YouTube/Zoom.
                  </div>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accordion-button-secondary collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                    Posso assistir as aulas pelo celular?
                  </button>
                </h2>
                <div
                  id="faq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    Sim! Nossa plataforma é totalmente responsiva e funciona
                    perfeitamente em celulares e tablets. Você pode estudar de
                    onde estiver, quando quiser.
                  </div>
                </div>
              </div>

              {/* FAQ 8 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accordion-button-secondary collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                  >
                    Esqueci minha senha, como recupero?
                  </button>
                </h2>
                <div
                  id="faq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body bg-accordion">
                    Na página de <strong>Login</strong>, clique em "Esqueceu sua
                    senha?" e siga as instruções. Você receberá um e-mail com o
                    link para redefinir sua senha em até 5 minutos.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}