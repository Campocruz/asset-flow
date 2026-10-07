-- ---------------------------------------------------------------------
-- BUILDINGS
-- ---------------------------------------------------------------------
INSERT INTO buildings (id, code, name, address) VALUES (1, 'FAB-A', 'Fabbricato A - Produzione', 'Via dell''Industria 12');
INSERT INTO buildings (id, code, name, address) VALUES (2, 'FAB-B', 'Fabbricato B - Assemblaggio', 'Via dell''Industria 14');
INSERT INTO buildings (id, code, name, address) VALUES (3, 'FAB-C', 'Fabbricato C - Logistica', 'Via del Lavoro 3');

-- ---------------------------------------------------------------------
-- DEPARTMENTS
-- ---------------------------------------------------------------------
INSERT INTO departments (id, code, name, description, building_id) VALUES (1, 'STP', 'Stampaggio', 'Stampaggio a freddo di lamiere', 1);
INSERT INTO departments (id, code, name, description, building_id) VALUES (2, 'LAV', 'Lavorazioni meccaniche', 'Fresatura e tornitura di precisione', 1);
INSERT INTO departments (id, code, name, description, building_id) VALUES (3, 'TRT', 'Trattamenti termici', 'Tempra e rinvenimento dei componenti', 1);
INSERT INTO departments (id, code, name, description, building_id) VALUES (4, 'SLD', 'Saldatura', 'Saldatura robotizzata di telai', 2);
INSERT INTO departments (id, code, name, description, building_id) VALUES (5, 'ASM', 'Assemblaggio', 'Montaggio finale e collaudo', 2);
INSERT INTO departments (id, code, name, description, building_id) VALUES (6, 'IMB', 'Imballaggio', 'Confezionamento del prodotto finito', 3);
INSERT INTO departments (id, code, name, description, building_id) VALUES (7, 'LOG', 'Logistica interna', 'Movimentazione e stoccaggio', 3);

-- ---------------------------------------------------------------------
-- MACHINES
-- ---------------------------------------------------------------------
INSERT INTO machines (id, asset_code, name, status) VALUES (1, 'PR-01', 'Pressa idraulica 400 t', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (2, 'PR-02', 'Pressa idraulica 250 t', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (3, 'CNC-01', 'Centro di lavoro 5 assi', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (4, 'CNC-02', 'Centro di lavoro verticale 3 assi', 'IN_MANUTENZIONE');
INSERT INTO machines (id, asset_code, name, status) VALUES (5, 'FRN-01', 'Forno di tempra a nastro', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (6, 'SLD-01', 'Cella di saldatura robotizzata 1', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (7, 'SLD-02', 'Cella di saldatura robotizzata 2', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (8, 'ASM-01', 'Linea di assemblaggio telai', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (9, 'ASM-02', 'Postazione di avvitatura automatica', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (10, 'IMB-01', 'Confezionatrice flow-pack', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (11, 'IMB-02', 'Pallettizzatore a strati', 'ATTIVA');
INSERT INTO machines (id, asset_code, name, status) VALUES (12, 'LOG-01', 'Nastro trasportatore magazzino', 'FERMA');

INSERT INTO department_machine (department_id, machine_id) VALUES (1, 1);
INSERT INTO department_machine (department_id, machine_id) VALUES (2, 1);

-- ---------------------------------------------------------------------
-- ROLES
-- ---------------------------------------------------------------------
INSERT INTO roles (id, name) VALUES (1, 'ADMIN');
INSERT INTO roles (id, name) VALUES (2, 'USER');

-- ---------------------------------------------------------------------
-- USERS
-- ---------------------------------------------------------------------
INSERT INTO users (id, username, password, email) VALUES (1, 'admin', '{noop}admin', 'email@test.com');
INSERT INTO users (id, username, password, email) VALUES (2, 'mario', '{noop}mario', 'email@test.com');
INSERT INTO users (id, username, password, email) VALUES (3, 'giulia', '{noop}giulia', 'email@test.com');

-- ---------------------------------------------------------------------
-- USER_ROLES
-- ---------------------------------------------------------------------
INSERT INTO user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO user_role (user_id, role_id) VALUES (3, 2);
