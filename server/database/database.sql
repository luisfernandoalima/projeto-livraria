--
-- PostgreSQL database dump
--

\restrict V82vbXJJ8C153N8pp8sLvtEes00jvvQ69ks0mtrMd6GMwcAddpy0btSwrHRjKim

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-06-11 18:22:25 -03

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
-- TOC entry 220 (class 1259 OID 17133)
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargo (
    id integer NOT NULL,
    nome_cargo character varying(50) NOT NULL
);


ALTER TABLE public.cargo OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 17132)
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
-- TOC entry 3561 (class 0 OID 0)
-- Dependencies: 219
-- Name: cargo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cargo_id_seq OWNED BY public.cargo.id;


--
-- TOC entry 226 (class 1259 OID 17184)
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
-- TOC entry 225 (class 1259 OID 17183)
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
-- TOC entry 3562 (class 0 OID 0)
-- Dependencies: 225
-- Name: entrada_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entrada_id_seq OWNED BY public.entrada.id;


--
-- TOC entry 222 (class 1259 OID 17144)
-- Name: produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    autor character varying(255) NOT NULL,
    serie character varying(150),
    volume character varying(50),
    isbn13 character(13) NOT NULL,
    numero_paginas integer,
    idioma character varying(50),
    data_publicacao date,
    genero character varying(100),
    classificacao_indicativa character varying(50),
    preco numeric(10,2) NOT NULL,
    estoque integer DEFAULT 0,
    imagem_capa text
);


ALTER TABLE public.produto OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 17201)
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
-- TOC entry 221 (class 1259 OID 17143)
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
-- TOC entry 3563 (class 0 OID 0)
-- Dependencies: 221
-- Name: produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produto_id_seq OWNED BY public.produto.id;


--
-- TOC entry 230 (class 1259 OID 17238)
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
-- TOC entry 229 (class 1259 OID 17220)
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
-- TOC entry 228 (class 1259 OID 17219)
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
-- TOC entry 3564 (class 0 OID 0)
-- Dependencies: 228
-- Name: saida_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.saida_id_seq OWNED BY public.saida.id;


--
-- TOC entry 224 (class 1259 OID 17161)
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
-- TOC entry 223 (class 1259 OID 17160)
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
-- TOC entry 3565 (class 0 OID 0)
-- Dependencies: 223
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- TOC entry 3356 (class 2604 OID 17136)
-- Name: cargo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo ALTER COLUMN id SET DEFAULT nextval('public.cargo_id_seq'::regclass);


--
-- TOC entry 3360 (class 2604 OID 17187)
-- Name: entrada id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada ALTER COLUMN id SET DEFAULT nextval('public.entrada_id_seq'::regclass);


--
-- TOC entry 3357 (class 2604 OID 17147)
-- Name: produto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto ALTER COLUMN id SET DEFAULT nextval('public.produto_id_seq'::regclass);


--
-- TOC entry 3362 (class 2604 OID 17223)
-- Name: saida id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida ALTER COLUMN id SET DEFAULT nextval('public.saida_id_seq'::regclass);


--
-- TOC entry 3359 (class 2604 OID 17164)
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- TOC entry 3545 (class 0 OID 17133)
-- Dependencies: 220
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargo (id, nome_cargo) FROM stdin;
1	admin
2	colaborador
\.


--
-- TOC entry 3551 (class 0 OID 17184)
-- Dependencies: 226
-- Data for Name: entrada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entrada (id, cupom_fiscal, nome_fornecedor, cnpj_fornecedor, valor_total, data_entrada, id_usuario) FROM stdin;
\.


--
-- TOC entry 3547 (class 0 OID 17144)
-- Dependencies: 222
-- Data for Name: produto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto (id, titulo, autor, serie, volume, isbn13, numero_paginas, idioma, data_publicacao, genero, classificacao_indicativa, preco, estoque, imagem_capa) FROM stdin;
2	Yorha: Pearl Harbor Descent Record - A Nier: Automata Story 01	Yoko Taro	Yorha: Pearl Harbor Descent Record	1	9781646091812	176	Inglês	2022-12-12	1	1	64.00	4	/uploads/aedfbe3a-52c4-41bd-a4f2-e0ba8845a92f.jpg
1	Chainsaw Man Vol: 01	Tatsuki Fujimoto	Chainsaw Man	1	9786555127331	192	Português-BR	2025-06-29	2	5	35.00	3	/uploads/f20a073f-cfdf-4afa-9b5c-f8488884e695.jpg
\.


--
-- TOC entry 3552 (class 0 OID 17201)
-- Dependencies: 227
-- Data for Name: produto_entrada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto_entrada (id_entrada, id_produto, quantidade_item, valor_itens) FROM stdin;
\.


--
-- TOC entry 3555 (class 0 OID 17238)
-- Dependencies: 230
-- Data for Name: produto_saida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto_saida (id_saida, id_produto, quantidade_item, valor_itens) FROM stdin;
\.


--
-- TOC entry 3554 (class 0 OID 17220)
-- Dependencies: 229
-- Data for Name: saida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.saida (id, cupom_fiscal, cliente, cpf_cliente, preco_total, tipo_pagamento, data_saida, id_usuario) FROM stdin;
\.


--
-- TOC entry 3549 (class 0 OID 17161)
-- Dependencies: 224
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, nome, email, senha, telefone, cpf, id_cargo) FROM stdin;
12	Admin	admin@tsuru.com	123	00 00000-0000	00000000000	1
14	Luis	luis.lima@tsuru.com	12345	1111111	12345678911	2
\.


--
-- TOC entry 3566 (class 0 OID 0)
-- Dependencies: 219
-- Name: cargo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cargo_id_seq', 2, true);


--
-- TOC entry 3567 (class 0 OID 0)
-- Dependencies: 225
-- Name: entrada_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entrada_id_seq', 12, true);


--
-- TOC entry 3568 (class 0 OID 0)
-- Dependencies: 221
-- Name: produto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produto_id_seq', 2, true);


--
-- TOC entry 3569 (class 0 OID 0)
-- Dependencies: 228
-- Name: saida_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.saida_id_seq', 4, true);


--
-- TOC entry 3570 (class 0 OID 0)
-- Dependencies: 223
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 14, true);


--
-- TOC entry 3365 (class 2606 OID 17142)
-- Name: cargo cargo_nome_cargo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_nome_cargo_key UNIQUE (nome_cargo);


--
-- TOC entry 3367 (class 2606 OID 17140)
-- Name: cargo cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (id);


--
-- TOC entry 3379 (class 2606 OID 17195)
-- Name: entrada entrada_cupom_fiscal_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT entrada_cupom_fiscal_key UNIQUE (cupom_fiscal);


--
-- TOC entry 3381 (class 2606 OID 17193)
-- Name: entrada entrada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT entrada_pkey PRIMARY KEY (id);


--
-- TOC entry 3383 (class 2606 OID 17208)
-- Name: produto_entrada produto_entrada_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_entrada
    ADD CONSTRAINT produto_entrada_pkey PRIMARY KEY (id_entrada, id_produto);


--
-- TOC entry 3369 (class 2606 OID 17159)
-- Name: produto produto_isbn13_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_isbn13_key UNIQUE (isbn13);


--
-- TOC entry 3371 (class 2606 OID 17157)
-- Name: produto produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id);


--
-- TOC entry 3389 (class 2606 OID 17246)
-- Name: produto_saida produto_saida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_saida
    ADD CONSTRAINT produto_saida_pkey PRIMARY KEY (id_saida, id_produto);


--
-- TOC entry 3385 (class 2606 OID 17232)
-- Name: saida saida_cupom_fiscal_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida
    ADD CONSTRAINT saida_cupom_fiscal_key UNIQUE (cupom_fiscal);


--
-- TOC entry 3387 (class 2606 OID 17230)
-- Name: saida saida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida
    ADD CONSTRAINT saida_pkey PRIMARY KEY (id);


--
-- TOC entry 3373 (class 2606 OID 17177)
-- Name: usuario usuario_cpf_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_cpf_key UNIQUE (cpf);


--
-- TOC entry 3375 (class 2606 OID 17175)
-- Name: usuario usuario_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_email_key UNIQUE (email);


--
-- TOC entry 3377 (class 2606 OID 17173)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 3391 (class 2606 OID 17196)
-- Name: entrada entrada_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT entrada_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- TOC entry 3392 (class 2606 OID 17209)
-- Name: produto_entrada produto_entrada_id_entrada_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_entrada
    ADD CONSTRAINT produto_entrada_id_entrada_fkey FOREIGN KEY (id_entrada) REFERENCES public.entrada(id);


--
-- TOC entry 3393 (class 2606 OID 17214)
-- Name: produto_entrada produto_entrada_id_produto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_entrada
    ADD CONSTRAINT produto_entrada_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produto(id);


--
-- TOC entry 3395 (class 2606 OID 17252)
-- Name: produto_saida produto_saida_id_produto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_saida
    ADD CONSTRAINT produto_saida_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produto(id);


--
-- TOC entry 3396 (class 2606 OID 17247)
-- Name: produto_saida produto_saida_id_saida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_saida
    ADD CONSTRAINT produto_saida_id_saida_fkey FOREIGN KEY (id_saida) REFERENCES public.saida(id);


--
-- TOC entry 3394 (class 2606 OID 17233)
-- Name: saida saida_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.saida
    ADD CONSTRAINT saida_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- TOC entry 3390 (class 2606 OID 17178)
-- Name: usuario usuario_id_cargo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_cargo_fkey FOREIGN KEY (id_cargo) REFERENCES public.cargo(id);


-- Completed on 2026-06-11 18:22:25 -03

--
-- PostgreSQL database dump complete
--

\unrestrict V82vbXJJ8C153N8pp8sLvtEes00jvvQ69ks0mtrMd6GMwcAddpy0btSwrHRjKim

