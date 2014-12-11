INSERT INTO `itinerary`.`itinerary_master` (`itinerary_id`, `start_date`, `end_date`, `itinerary_type`)
VALUES ('1', '2014/1/1', '2014/10/1', 'abc');
INSERT INTO `itinerary`.`itinerary_master` (`itinerary_id`, `start_date`, `end_date`, `itinerary_type`)
VALUES ('2', '2014/02/01', '2014/02/20', 'cde');
INSERT INTO `itinerary`.`itinerary_master` (`itinerary_id`, `start_date`, `end_date`, `itinerary_type`)
VALUES ('3', STR_TO_DATE('1-03-2014', '%d-%m-%Y') , STR_TO_DATE('10-03-2014', '%d-%m-%Y') , 'cde');


INSERT INTO `itinerary`.`itinerary_detail` (`itinerary_id`, `itinerary_detail_id`, `itinerary_detail_date`, `source_place_id`, `dest_place_id`) 
VALUES ('1', 'ID1', '2014-01-01', 'Mumbai', 'Shimla');
INSERT INTO `itinerary`.`itinerary_detail` (`itinerary_id`, `itinerary_detail_id`, `itinerary_detail_date`, `source_place_id`, `dest_place_id`) 
VALUES ('2', 'ID2', '2014-01-02', 'Kerala', 'Chennai');

INSERT INTO `itinerary`.`itinerary_travel_link` (`itinerary_detail_id`, `transport_id`, `comments`, `source_place_id`, `dest_place_id`, `cost`)
VALUES ('ID1', 'FL1', 'Flight from mumbai to delhi', 'Mumbai', 'Delhi', 4000);


INSERT INTO `itinerary`.`itinerary_sightseeing_link` (`itinerary_detail_id`, `place_id`, `comments`)
VALUES ('ID1', 'PL1', 'the mall shimla');
INSERT INTO `itinerary`.`itinerary_sightseeing_link` (`itinerary_detail_id`, `place_id`, `comments`)
VALUES ('ID2', 'PL2', 'xyz temple');


INSERT INTO `itinerary`.`itinerary_hotel_link` (`itinerary_hotel_detail_id`, `itinerary_detail_id`, `hotel_id`, `check_in_date`, `check_out_date`)
VALUES ('IHD1', 'ID1', 'HT1', '2014-01-01', '2014-02-01');


INSERT INTO `itinerary`.`person_master` (`person_id`, `person_first_name`, `person_last_name`) VALUES ('P123', 'Sandesh', 'Patil');
INSERT INTO `itinerary`.`person_master` (`person_id`, `person_first_name`, `person_last_name`) VALUES ('P124', 'Sanchit', 'Srivastava');


INSERT INTO `itinerary`.`itinerary_person_link` (`person_id`, `itinerary_id`, `role_id`) VALUES ('P123', '1', '1');
INSERT INTO `itinerary`.`itinerary_person_link` (`person_id`, `itinerary_id`, `role_id`) VALUES ('P124', '2', '1');


select * from itinerary.itinerary_master;
select * from itinerary.itinerary_detail;
select * from itinerary.itinerary_travel_link;
select * from itinerary.itinerary_sightseeing_link;
select * from itinerary.itinerary_hotel_link;
select * from  itinerary.person_master;
select * from itinerary.itinerary_person_link;