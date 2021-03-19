INSERT INTO tbl_users (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tbl_users (name, email, password) VALUES ('Ana Paula', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tbl_users (name, email, password) VALUES ('Joao Lucas', 'joao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tbl_users (name, email, password) VALUES ('Jose Sampaio', 'jose@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');


INSERT INTO tbl_roles (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tbl_roles (authority) VALUES ('ROLE_MEMBER');


INSERT INTO tbl_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tbl_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tbl_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tbl_user_role (user_id, role_id) VALUES (4, 1);


INSERT INTO tbl_genres (name) VALUES ('Ação');
INSERT INTO tbl_genres (name) VALUES ('Aventura');
INSERT INTO tbl_genres (name) VALUES ('Fantasia');
INSERT INTO tbl_genres (name) VALUES ('Comédia');
INSERT INTO tbl_genres (name) VALUES ('Romance');
INSERT INTO tbl_genres (name) VALUES ('Ficção científica');


INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Raya e o Último Dragão','A quest to save her world.',2021,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yXrb84zJidCefyhTWHwo4yCDvwz.jpg','O reino encantado Kumandra é dividido em cinco regiões e sua população venerava os dragões mágicos que eram presentes no reino, porém quando uma força maligna ameaçou a Terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra fraturada e seu povo dividido.',2);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Tom & Jerry - O Filme','Melhores inimigos. Piores amigos.',2021,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6KErczPBROQty7QoIsaa6wJYXZi.jpg','Um gato de rua chamado Tom é contratado por uma garota chamada Kayla, uma jovem empregada que trabalha em um hotel glamouroso em Nova York, para se livrar de Jerry, um rato travesso que se mudou para o hotel, antes que ele seja a ruína de um importante casamento.',1);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Monster Hunter','Junte-se à caçada.',2020,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2QhhILPAv7MKFd1q57ssQeEV2su.jpg','Baseado no jogo da Capcom chamado Monster Hunter, a tenente Artemis e seus soldados são transportados para um novo mundo. Lá, eles se envolvem em batalhas imponentes, buscando desesperadamente a sobrevivência contra bestas gigantes portadoras de habilidades surreais.',3);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Liga da Justiça de Zack Snyder','Caído. Ressuscitado. Unidos.',2021,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v9XwEXYWpxt2rpkmFBiQ1zeyKUy.jpg','Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.',1);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Um Príncipe em Nova York 2','Ele voltou como rei.',2021,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mpXRG5zPUT18IeYvCoC4zOscked.jpg','Situado no luxuoso país da realeza Zamunda, o recém coroado Rei Akeem e seu confidente Semmi embarcam em uma nova aventura que os levará ao redor do mundo: de sua grande nação Africana ao Queens, bairro de Nova York – onde tudo começou!',4);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Mulher-Maravilha 1984','Uma nova era de maravilhas começa.',2020,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AweDlIiohqw4sjC7gCsPVd1zo77.jpg','Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.',3);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('After - Depois da Verdade','Can love overcome the past?',2020,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aduKXG7H0z0osY8KNQjcLB3cWO5.jpg','Após descobrir sobre a aposta, Tessa (Josephine Langford) tenta esquecer Hardin (Hero Fiennes Tiffin), o jovem caótico e revoltado que partiu seu coração. Porém, ela está prestes a descobrir que alguns amores não podem ser superados. Hardin sabe que cometeu o pior erro de sua vida ao ter magoado a jovem tão profundamente, mas vai lutar com toda a sua força para reconquistar o grande amor da sua vida.',5);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Skylines','To save our world she must invade theirs.',2020,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg','Quando um vírus ameaça transformar os híbridos alienígenas amigáveis que agora vivem na Terra contra os humanos, a capitã Rose Corley deve liderar uma equipe de mercenários de elite em uma missão ao mundo alienígena para salvar o que resta da humanidade.',6);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Agentes Vanguard',null,2020,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fMXRTTMiEsvSFqhRuoeZXKcl3QP.jpg','A empresa de segurança secreta Vanguard é a última esperança de sobrevivência para um contador, depois que ele é alvo da organização mercenária mais mortal do mundo.',1);
INSERT INTO tbl_movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Godzilla vs. Kong','Um dos dois cairá.',2021,'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg','Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.',6);


INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Não gostei, achei sem graça', 9, 2);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Esse filme nunca perde a graça, já assiti varias vezes', 4, 2);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Ri muito, super recomendo', 10, 2);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Sou super fã dessa serie de filmes', 1, 2);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Esse filme é bom, só não gostei muito do final', 7, 2);

INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Até que é legal, dou nota 7', 10, 3);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Achei muito legal, cheio de animações legais', 8, 3);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Muito fera !!! super recomendo !!', 6, 3);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Legal, esse filme me faz lembrar minha ex namorada ;(', 5, 3);
INSERT INTO tbl_reviews (text, movie_id, user_id) values ('Filme excelente, o enredo é muito bem elaborado', 3, 3);