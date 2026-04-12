--
-- PostgreSQL database dump
--

\restrict 4pevRRoVXMepOGkiZ8RRo4EMIuayhwAigy1yqfRH3oOdu9hmC78a1ooDEgpu6g2

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cargos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargos (
    id integer NOT NULL,
    nome_cargo character varying(50) NOT NULL
);


ALTER TABLE public.cargos OWNER TO postgres;

--
-- Name: cargos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cargos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cargos_id_seq OWNER TO postgres;

--
-- Name: cargos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cargos_id_seq OWNED BY public.cargos.id;


--
-- Name: entradas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entradas (
    id integer NOT NULL,
    nome_fornecedor character varying(255),
    cnpj_fornecedor character varying(15),
    valor_total numeric(10,2) NOT NULL,
    data_entrada date DEFAULT CURRENT_DATE,
    status_entrada character varying(50),
    id_usuario integer
);


ALTER TABLE public.entradas OWNER TO postgres;

--
-- Name: entradas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entradas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.entradas_id_seq OWNER TO postgres;

--
-- Name: entradas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entradas_id_seq OWNED BY public.entradas.id;


--
-- Name: produtos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produtos (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    subtitulo character varying(255),
    sinopse text,
    autor character varying(255) NOT NULL,
    serie character varying(150),
    volume character varying(50),
    isbn13 character(13) NOT NULL,
    formato character varying(50),
    numero_paginas integer,
    idioma character varying(50),
    data_publicacao date,
    genero character varying(100),
    classificacao_indicativa character varying(50),
    preco numeric(10,2) NOT NULL,
    estoque integer DEFAULT 0,
    status character varying(20),
    imagem_capa text
);


ALTER TABLE public.produtos OWNER TO postgres;

--
-- Name: produtos_entrada; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produtos_entrada (
    id_entrada integer NOT NULL,
    id_produto integer NOT NULL,
    quantidade_item integer NOT NULL,
    valor_itens numeric(10,2)
);


ALTER TABLE public.produtos_entrada OWNER TO postgres;

--
-- Name: produtos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produtos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.produtos_id_seq OWNER TO postgres;

--
-- Name: produtos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produtos_id_seq OWNED BY public.produtos.id;


--
-- Name: produtos_saida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produtos_saida (
    id_saida integer NOT NULL,
    id_produto integer NOT NULL,
    quantidade_item integer NOT NULL,
    preco_itens numeric(10,2) NOT NULL
);


ALTER TABLE public.produtos_saida OWNER TO postgres;

--
-- Name: saidas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.saidas (
    id integer NOT NULL,
    preco_total numeric(10,2) NOT NULL,
    cliente character varying(255),
    cpf_cliente character(11),
    data_saida date DEFAULT CURRENT_DATE,
    status character varying(50),
    id_usuario integer
);


ALTER TABLE public.saidas OWNER TO postgres;

--
-- Name: saidas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.saidas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.saidas_id_seq OWNER TO postgres;

--
-- Name: saidas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.saidas_id_seq OWNED BY public.saidas.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    senha character varying(255) NOT NULL,
    telefone character varying(20),
    cpf character(11) NOT NULL,
    funcao integer
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: cargos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargos ALTER COLUMN id SET DEFAULT nextval('public.cargos_id_seq'::regclass);


--
-- Name: entradas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entradas ALTER COLUMN id SET DEFAULT nextval('public.entradas_id_seq'::regclass);


--
-- Name: produtos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos ALTER COLUMN id SET DEFAULT nextval('public.produtos_id_seq'::regclass);


--
-- Name: saidas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saidas ALTER COLUMN id SET DEFAULT nextval('public.saidas_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: cargos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargos (id, nome_cargo) FROM stdin;
\.


--
-- Data for Name: entradas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entradas (id, nome_fornecedor, cnpj_fornecedor, valor_total, data_entrada, status_entrada, id_usuario) FROM stdin;
\.


--
-- Data for Name: produtos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produtos (id, titulo, subtitulo, sinopse, autor, serie, volume, isbn13, formato, numero_paginas, idioma, data_publicacao, genero, classificacao_indicativa, preco, estoque, status, imagem_capa) FROM stdin;
\.


--
-- Data for Name: produtos_entrada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produtos_entrada (id_entrada, id_produto, quantidade_item, valor_itens) FROM stdin;
\.


--
-- Data for Name: produtos_saida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produtos_saida (id_saida, id_produto, quantidade_item, preco_itens) FROM stdin;
\.


--
-- Data for Name: saidas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.saidas (id, preco_total, cliente, cpf_cliente, data_saida, status, id_usuario) FROM stdin;
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nome, email, senha, telefone, cpf, funcao) FROM stdin;
\.


--
-- Name: cargos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cargos_id_seq', 1, false);


--
-- Name: entradas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entradas_id_seq', 1, false);


--
-- Name: produtos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produtos_id_seq', 1, false);


--
-- Name: saidas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.saidas_id_seq', 1, false);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 1, false);


--
-- Name: cargos cargos_nome_cargo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargos
    ADD CONSTRAINT cargos_nome_cargo_key UNIQUE (nome_cargo);


--
-- Name: cargos cargos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargos
    ADD CONSTRAINT cargos_pkey PRIMARY KEY (id);


--
-- Name: entradas entradas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entradas
    ADD CONSTRAINT entradas_pkey PRIMARY KEY (id);


--
-- Name: produtos_entrada produtos_entrada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos_entrada
    ADD CONSTRAINT produtos_entrada_pkey PRIMARY KEY (id_entrada, id_produto);


--
-- Name: produtos produtos_isbn13_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_isbn13_key UNIQUE (isbn13);


--
-- Name: produtos produtos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (id);


--
-- Name: produtos_saida produtos_saida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos_saida
    ADD CONSTRAINT produtos_saida_pkey PRIMARY KEY (id_saida, id_produto);


--
-- Name: saidas saidas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saidas
    ADD CONSTRAINT saidas_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_cpf_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_cpf_key UNIQUE (cpf);


--
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: entradas entradas_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entradas
    ADD CONSTRAINT entradas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id);


--
-- Name: produtos_entrada produtos_entrada_id_entrada_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos_entrada
    ADD CONSTRAINT produtos_entrada_id_entrada_fkey FOREIGN KEY (id_entrada) REFERENCES public.entradas(id);


--
-- Name: produtos_entrada produtos_entrada_id_produto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos_entrada
    ADD CONSTRAINT produtos_entrada_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produtos(id);


--
-- Name: produtos_saida produtos_saida_id_produto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos_saida
    ADD CONSTRAINT produtos_saida_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produtos(id);


--
-- Name: produtos_saida produtos_saida_id_saida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos_saida
    ADD CONSTRAINT produtos_saida_id_saida_fkey FOREIGN KEY (id_saida) REFERENCES public.saidas(id);


--
-- Name: saidas saidas_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saidas
    ADD CONSTRAINT saidas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id);


--
-- Name: usuarios usuarios_funcao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_funcao_fkey FOREIGN KEY (funcao) REFERENCES public.cargos(id);


--
-- PostgreSQL database dump complete
--

\unrestrict 4pevRRoVXMepOGkiZ8RRo4EMIuayhwAigy1yqfRH3oOdu9hmC78a1ooDEgpu6g2

