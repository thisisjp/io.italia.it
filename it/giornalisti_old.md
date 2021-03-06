---
layout: internal
title: IO, un progetto da raccontare
subtitle: Comunicati stampa, immagini, video, presentazioni, ecc.
description: Sei un giornalista e sei alla ricerca di materiale per scrivere un articolo sul progetto IO? In questa area puoi trovare informazioni, comunicati stampa, presentazioni e altre risorse multimediali da poter scaricare.
lang: it
ref: giornalisti_old
permalink: /giornalisti_old/
redirect_from:
  - /it/giornalisti_old/

intro_image: "/assets/img/intro-giornalisti.svg"
intro_primary_text: "Leggi i post su Medium"
intro_primary_link: "https://medium.com/team-per-la-trasformazione-digitale/progetto-io-app-servizi-pubblici/home"
---

<section class="container">
    <div class="row">
        <div class="col-md-8">
            {% assign posts = site.posts | where: "lang", page.lang %}
            <div class="mt-0 mt-md-5">
                {% for post in posts %}
                    <div class="card-wrapper my-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="head-tags">
                                    <div class="d-flex justify-content-between w-100">
                                      <div><span class="data">{% include date.html date=post.date %}</span></div>
                                    </div>
                                </div>
                                <h5 class="card-title big-heading">
                                    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
                                </h5>
                                <div class="card-text">{{ post.excerpt }}</div>__
                                <a class="card-signature" href="{{ site.baseurl }}{{ post.url }}">Continua a leggere</a>
                                <a class="read-more" href="{{ site.baseurl }}{{ post.download_link }}">
                                <span class="">Scarica</span>
                                    <svg class="icon">
                                      <use xlink:href="/assets/svg/sprite.svg#it-download"></use>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                {% endfor %}
            </div>
        </div>
        <div class="col-md-4">
	        <aside class="mt-0 mt-md-5 pt-3 pt-md-5 pb-3 pb-md-5">
            <p class="font-weight-bold">Comunicati stampa</p>
            <ul class="list-unstyled mt-2 mt-md-5">
                {% for download in site.data.downloads[page.lang]["press"] %}
                <li class="mb-2 pt-2 pb-2">
                    <a class="d-flex" download="{{ download.name }}" href="{{ download.asset | relative_url}}">
                        <img class="icon mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="icona download">
                        <p>
                        <span class="font-weight-bold">{{ download.description }}</span><br/>
                        <span class="small">{{ download.type }}</span>
                        </p>
                    </a>
                </li>
                {% endfor %}
            </ul>
            <p class="font-weight-bold">Materiale da scaricare</p>
            <ul class="list-unstyled mt-2 mt-md-5">
                {% for download in site.data.downloads[page.lang]["media"] %}
                <li class="mb-2 pt-2 pb-2">
                    <a class="d-flex" download="{{ download.name }}" href="{{ download.asset | relative_url}}">
                        <img class="icon mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="icona download">
                        <p>
                        <span class="font-weight-bold">{{ download.description }}</span><br/>
                        <span class="small">{{ download.type }}</span>
                        </p>
                    </a>
                </li>
                {% endfor %}
            </ul>
            <p class="font-weight-bold pt-2 pt-md-4">Ufficio stampa</p>
            <p>Gianluca Di Tommaso,<br/>Simona Mercandalli,<br/>Ludovico Poggi<br/>Email: <a href="mailto:media.teamdigitale@governo.it">media.teamdigitale@governo.it</a></p>
            </aside>
        </div>
    </div><!--/row-->
</section>

<section class="giornalisti__slides pt-3 pt-md-4 pb-3 pb-md-4">
    <div class="container">
        <h2>Galleria slide di presentazione</h2>
    </div>
    <div class="container giornalisti__slides-container mt-2 mt-md-5">
        <div class="d-flex flex-row flex-wrap giornalisti__slides-content">
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-01-cover@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-01-cover.jpg' | relative_url}}" alt="io.italia.it - cover"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-02-messaggi@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-02-messaggi.jpg' | relative_url}}" alt="io.italia.it - messaggi"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-03-pagamenti@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-03-pagamenti.jpg' | relative_url}}" alt="io.italia.it - pagamenti"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-04-documenti@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-04-documenti.jpg' | relative_url}}" alt="io.italia.it - documenti"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-05-preferenze@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-05-preferenze.jpg' | relative_url}}" alt="io.italia.it - preferenze"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-06-profilo@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-06-profilo.jpg' | relative_url}}" alt="io.italia.it - profilo"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-07-servizi@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-07-servizi.png' | relative_url}}" alt="io.italia.it - servizi"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-08-architettura-01@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-08-architettura-01.jpg' | relative_url}}" alt="io.italia.it - architettura 01"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/it/slide-09-architettura-02@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/it/small/slide-09-architettura-02.jpg' | relative_url}}" alt="io.italia.it - architettura 02"></a>
        </div>
    </div>
</section>
