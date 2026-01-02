import React from "react";

type SupportSearchProps = {
  blok: {
    title: string;
    placeholder: string;
    button_card_search: string;
    popular_topics: string;
    topics01: string;
    topics02: string;
    topics03: string;

  };
};


export default function SupportSearch({ blok }: SupportSearchProps) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4 bg-card">
                <h4 className="text-center mb-4">
                  <i className="bi bi-search"></i> {blok.title}
                </h4>

                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control custom-focus"
                    placeholder={blok.placeholder}
                    id="busca-suporte"
                  />
                  <button className="btn btn-remove-active" type="button">
                    <i className="bi bi-search"></i> {blok.button_card_search}
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <small>
                    {blok.popular_topics}{" "}
                    <a href="#faq" className="text-decoration-none custom-txt">
                      {blok.topics01}
                    </a>
                    ,{" "}
                    <a href="#faq" className="text-decoration-none custom-txt">
                      {blok.topics02}
                    </a>
                    ,{" "}
                    <a href="#faq" className="text-decoration-none custom-txt">
                      {blok.topics03}
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
