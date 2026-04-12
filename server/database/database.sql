--
-- PostgreSQL database dump
--

\restrict HWgH0PEZSXTxChlkJdlDuZQB0haPmQsbRaYZ64rdQTxtjEWttbofVUgDKTgNrks

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
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargo (
    id integer NOT NULL,
    nome_cargo character varying(50) NOT NULL
);


ALTER TABLE public.cargo OWNER TO postgres;

--
-- Name: cargo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cargo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cargo_id_seq OWNER TO postgres;

--
-- Name: cargo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cargo_id_seq OWNED BY public.cargo.id;


--
-- Name: entrada; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entrada (
    id integer NOT NULL,
    cupom_fiscal character varying(50) NOT NULL,
    nome_fornecedor character varying(255),
    cnpj_fornecedor character varying(18),
    valor_total numeric(10,2) NOT NULL,
    data_entrada date DEFAULT CURRENT_DATE,
    id_usuario integer
);


ALTER TABLE public.entrada OWNER TO postgres;

--
-- Name: entrada_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entrada_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.entrada_id_seq OWNER TO postgres;

--
-- Name: entrada_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entrada_id_seq OWNED BY public.entrada.id;


--
-- Name: produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto (
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


ALTER TABLE public.produto OWNER TO postgres;

--
-- Name: produto_entrada; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto_entrada (
    id_entrada integer NOT NULL,
    id_produto integer NOT NULL,
    quantidade_item integer NOT NULL,
    valor_itens numeric(10,2)
);


ALTER TABLE public.produto_entrada OWNER TO postgres;

--
-- Name: produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.produto_id_seq OWNER TO postgres;

--
-- Name: produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produto_id_seq OWNED BY public.produto.id;


--
-- Name: produto_saida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto_saida (
    id_saida integer NOT NULL,
    id_produto integer NOT NULL,
    quantidade_item integer NOT NULL,
    valor_itens numeric(10,2) NOT NULL
);


ALTER TABLE public.produto_saida OWNER TO postgres;

--
-- Name: saida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.saida (
    id integer NOT NULL,
    cupom_fiscal character varying(50) NOT NULL,
    cliente character varying(255),
    cpf_cliente character(11),
    preco_total numeric(10,2) NOT NULL,
    tipo_pagamento character varying(50) NOT NULL,
    data_saida date DEFAULT CURRENT_DATE,
    id_usuario integer
);


ALTER TABLE public.saida OWNER TO postgres;

--
-- Name: saida_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.saida_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.saida_id_seq OWNER TO postgres;

--
-- Name: saida_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.saida_id_seq OWNED BY public.saida.id;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    senha character varying(255) NOT NULL,
    telefone character varying(20),
    cpf character(11) NOT NULL,
    id_cargo integer
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_seq OWNER TO postgres;

--
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- Name: cargo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo ALTER COLUMN id SET DEFAULT nextval('public.cargo_id_seq'::regclass);


--
-- Name: entrada id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada ALTER COLUMN id SET DEFAULT nextval('public.entrada_id_seq'::regclass);


--
-- Name: produto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto ALTER COLUMN id SET DEFAULT nextval('public.produto_id_seq'::regclass);


--
-- Name: saida id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida ALTER COLUMN id SET DEFAULT nextval('public.saida_id_seq'::regclass);


--
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargo (id, nome_cargo) FROM stdin;
\.


--
-- Data for Name: entrada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entrada (id, cupom_fiscal, nome_fornecedor, cnpj_fornecedor, valor_total, data_entrada, id_usuario) FROM stdin;
\.


--
-- Data for Name: produto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto (id, titulo, subtitulo, sinopse, autor, serie, volume, isbn13, formato, numero_paginas, idioma, data_publicacao, genero, classificacao_indicativa, preco, estoque, status, imagem_capa) FROM stdin;
\.


--
-- Data for Name: produto_entrada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto_entrada (id_entrada, id_produto, quantidade_item, valor_itens) FROM stdin;
\.


--
-- Data for Name: produto_saida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto_saida (id_saida, id_produto, quantidade_item, valor_itens) FROM stdin;
\.


--
-- Data for Name: saida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.saida (id, cupom_fiscal, cliente, cpf_cliente, preco_total, tipo_pagamento, data_saida, id_usuario) FROM stdin;
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, nome, email, senha, telefone, cpf, id_cargo) FROM stdin;
\.


--
-- Name: cargo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cargo_id_seq', 1, false);


--
-- Name: entrada_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entrada_id_seq', 1, false);


--
-- Name: produto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produto_id_seq', 1, false);


--
-- Name: saida_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.saida_id_seq', 1, false);


--
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 1, false);


--
-- Name: cargo cargo_nome_cargo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_nome_cargo_key UNIQUE (nome_cargo);


--
-- Name: cargo cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (id);


--
-- Name: entrada entrada_cupom_fiscal_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT entrada_cupom_fiscal_key UNIQUE (cupom_fiscal);


--
-- Name: entrada entrada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT entrada_pkey PRIMARY KEY (id);


--
-- Name: produto_entrada produto_entrada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_entrada
    ADD CONSTRAINT produto_entrada_pkey PRIMARY KEY (id_entrada, id_produto);


--
-- Name: produto produto_isbn13_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_isbn13_key UNIQUE (isbn13);


--
-- Name: produto produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id);


--
-- Name: produto_saida produto_saida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_saida
    ADD CONSTRAINT produto_saida_pkey PRIMARY KEY (id_saida, id_produto);


--
-- Name: saida saida_cupom_fiscal_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida
    ADD CONSTRAINT saida_cupom_fiscal_key UNIQUE (cupom_fiscal);


--
-- Name: saida saida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida
    ADD CONSTRAINT saida_pkey PRIMARY KEY (id);


--
-- Name: usuario usuario_cpf_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_cpf_key UNIQUE (cpf);


--
-- Name: usuario usuario_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- Name: entrada entrada_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT entrada_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- Name: produto_entrada produto_entrada_id_entrada_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_entrada
    ADD CONSTRAINT produto_entrada_id_entrada_fkey FOREIGN KEY (id_entrada) REFERENCES public.entrada(id);


--
-- Name: produto_entrada produto_entrada_id_produto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_entrada
    ADD CONSTRAINT produto_entrada_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produto(id);


--
-- Name: produto_saida produto_saida_id_produto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_saida
    ADD CONSTRAINT produto_saida_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produto(id);


--
-- Name: produto_saida produto_saida_id_saida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_saida
    ADD CONSTRAINT produto_saida_id_saida_fkey FOREIGN KEY (id_saida) REFERENCES public.saida(id);


--
-- Name: saida saida_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida
    ADD CONSTRAINT saida_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- Name: usuario usuario_id_cargo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_cargo_fkey FOREIGN KEY (id_cargo) REFERENCES public.cargo(id);


--
-- PostgreSQL database dump complete
--

\unrestrict HWgH0PEZSXTxChlkJdlDuZQB0haPmQsbRaYZ64rdQTxtjEWttbofVUgDKTgNrks

