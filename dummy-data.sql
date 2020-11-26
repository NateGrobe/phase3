INSERT INTO `hospital_data`.`doctors`(`doctor_Name`, `doctor_Type`)
VALUES
  ('Anna Brown', 'OBGYN'),
  ('Zed Rooney', 'Internal Medicine'),
  ('Ruffus Barrow', 'Cardiologist'),
  ('Johnnie Mann', 'Endocrinologist'),
  ('Marnie Durham', 'OBGYN'),
  ('Catherine Lewis', 'Internal Medicine'),
  ('Konrad Quintero', 'Cardiologist'),
  ('Melody Noel', 'Endocrinologist'),
  ('Simeon Blckwell', 'Plastic Surgeon');

INSERT INTO `hospital_data`.`nurses`(`nurse_Name`, `nurse_Type`)
VALUES
  ('Elijah Ramirez', 'RN'),
  ('Brendan Pits', 'RPN'),
  ('Simon Gallagher', 'RPN'),
  ('Yahya Sharma', 'RPN'),
  ('Kelly Norton', 'RN'),
  ('Orlando Higgs', 'RPN'),
  ('Nelly Shepard', 'RPN'),
  ('Levi Cowan', 'RPN');

INSERT INTO `hospital_data`.`patients` (
  `patient_fName`,
  `patient_mName`,
  `patient_lName`,
  `doctor_ID`,
  `nurse_ID`) 
VALUES 
('Eman', 'Marcel', 'Wallace', '3', '2'),
('Caiden', 'Kirk', 'Carty', '3', '3'),
('Ewan', 'Zackery', 'Fountain', '6', '6'),
('Chloe', 'Melissa', 'Couch', '4', '4'),
('Anis', 'Ariya', 'Benjamin', '1', '1'),
('Adeline', 'Kayan', 'Munoz', '4', '4'),
('Lynsey', 'Reese', 'Gibbs', '5', '5'),
('Angel', 'Lyric', 'Stark', '8', '8'),
('Yunus', 'Mathilda', 'Mackie', '7', '7'),
('Cairo', 'Jude', 'Thorton', '9', '1'),
('Tiffany', 'Monica', 'Ray', '9', '2'),
('Peggy', 'Jodie', 'Lane', '9', '3'),
('Carter', 'James', 'Oliver', '9', '4');

INSERT INTO `hospital_data`.`patient_visit` (
  `checkin_Date`,
  `checkout_Date`,
  `patient_ID`,
  `diagnosis`, 
  `procedure`)
VALUES 
  ('2020-11-01', '2020-11-22', '1', 'COVID-19', 'covid treatment'),
  ('2019-07-04', '2019-07-08', '2', 'heart attack', 'balloon angioplasty'),
  ('2020-11-6', NULL, '2', 'COVID-19', 'covid treatment'),
  ('2018-02-02', '2018-02-14', '3', 'pneumonia', 'macrolide antibiotics'),
  ('2019-11-25', '2019-11-25', '3', 'broken arm', 'cast'),
  ('2020-10-31', NULL, '3', 'COVID-19', 'respirator'),
  ('2017-08-05', '2017-08-05', '4', 'type-1 diabetes', 'insulin'),
  ('2016-04-12', '2016-04-12', '5', 'pregnant', 'ultrasound'),
  ('2016-09-17', '2016-09-20', '5', 'labour', 'c-section'),
  ('2012-01-14', '2012-01-14', '7', 'pregnant', 'ultrasound'),
  ('2012-03-14', '2012-03-14', '7', 'pregnant', 'ultrasound'),
  ('2012-06-14', '2012-06-17', '7', 'labour', 'c-section'),
  ('2014-09-03', '2014-09-05', '6', 'hyperthyroidism', 'radioactive iodine'),
  ('2018-05-05', '2018-05-05', '8', 'parathyroid hypersecretion', 'parathyroidectomy'),
  ('2017-01-22', '2017-01-25', '9', 'heart arythmia', 'pacemaker implant'),
  ('2017-08-08', '2017-08-12', '9', 'cardiac arrest', 'coronary angioplasty'),
  ('2018-02-03', '2018-02-08', '9', 'heart attack', 'balloon angioplasty'),
  ('2019-02-03', '2018-02-08', '10', 'healthy', 'calf augmentation surgery'),
  ('2017-04-03', '2017-04-06', '11', 'healthy', 'rhinoplasty'),
  ('2018-04-03', '2018-04-06', '11', 'healthy', 'breast augmentation surgery'),
  ('2019-09-09', '2019-09-12', '12', 'healthy', 'rhinoplasty'),
  ('2019-12-20', '2019-12-24', '12', 'healthy', 'breast augmentation surgery'),
  ('2020-02-01', '2020-02-08', '12', 'healthy', 'gluteal augmentation surgery'),
  ('2018-02-01', '2018-02-04', '13', 'obese', 'liposuction'),
  ('2018-07-01', '2018-07-04', '13', 'obese', 'liposuction'),
  ('2019-05-08', '2019-05-12', '13', 'panniculus', 'abdominoplasty'),
  ('2019-07-08', '2019-07-12', '13', 'panniculus', 'abdominoplasty');


INSERT INTO `hospital_data`.`billing` (
  `services`,
  `patient_ID`)
VALUES 
  ('covid treatment', '1'),
  ('balloon angioplasty, covid treatment', '2'),
  ('macrolide antibiotics, cast, respirator', '3'),
  ('insulin', '4'),
  ('ultrasound, c-section', '5'),
  ('radioactive idoine', '6'),
  ('ultrasound, ultrasound, c-section', '7'),
  ('parathyroidectomy', '8'),
  ('pacemaker implant, coronary angioplasty, balloon angioplasty, covid treatment', '9');

INSERT INTO `hospital_data`.`billing` (
  `services`,
  `price_Total`,
  `oustanding_Balance`,
  `patient_ID`)
VALUES 
  ('calf augmentation', '10000.00', '4500.52', '10'),
  ('rhinoplasty, breast augmentation surgery', '45000.00', '42345.12', '11'),
  ('rhinoplasty, breast augmentation surgery, gluteal augmentation surgery', '55000.00', '12000.85', '12'),
  ('liposuction, liposuction, abdominoplasty, abdominoplasty', '100000.00', '0.00', '13');


INSERT INTO `hospital_data`.`patient_info`(
  `patient_ID`,
  `patient_Allergies`,
  `patient_HealthConditions`,
  `patient_FamilyHistory`,
  `smoker`,
  `drinker`,
  `drugs`,
  `current_medication`
)
VALUES
  ('1', NULL, NULL, 'alzheimers', '0', '1', '0', NULL),
  ('2', 'penicillin', 'heart palpatations', 'heart attacks', '1', '1', '0', NULL),
  ('3', NULL, 'asthma', 'asthma', '1', '0', '0', 'corticosteroids'),
  ('4', NULL, 'type-1 diabetes', 'type-1 diabetes', '1', '0', '0', 'insulin pump'),
  ('5', 'peanuts', NULL, NULL, '0', '0', '0', NULL),
  ('6', NULL, 'hyperthyroidism', 'hyperthyroidism', '1', '1', '1', NULL),
  ('7', 'peanuts', NULL, NULL, '0', '0', '0', NULL),
  ('8', NULL, 'parathyroid hypersecretion', NULL, '1', '0', '1', NULL),
  ('9', 'latex', 'heart arythmia', 'heart attacks', '1', '1', '1', NULL),
  ('10', 'latex', NULL, NULL, '1', '1', '0', NULL),
  ('11', NULL, 'asthma', 'asthma', '0', '1', '1', 'corticosteroids'),
  ('12', NULL, NULL, NULL, '0', '1', '0', NULL),
  ('13', 'penicillin', 'obesity', 'obesity', '0', '1', '0', NULL);

INSERT INTO `hospital_data`.`room` (`room_Type`) 
VALUES 
  ('short-term'),
  ('short-term'),
  ('short-term'),
  ('short-term'),
  ('short-term'),
  ('short-term'),
  ('long-term'),
  ('long-term'),
  ('long-term'),
  ('long-term');

INSERT INTO `hospital_data`.`room` (`room_Type`, `patient_ID`) 
VALUES 
  ('long-term', '2'),
  ('long-term', '3');
