INSERT INTO `Account` values(
							 'nhanmnm', 'nhan123'),(
							 'huylkl', 'HUY09123'),(
							 'khanhhit', 'Khanhhaha123'),(
							 'daobahuy89', 'Huydao347'),(
							 'saigonquangt', 'Saigonquan456'),(
							 'thedailycoffee90', 'Thedailycf567'),(
							 'phohanoi79', 'Phoquan0595'),(
							 'trankimkhanh29', 'Khanhne020902'),(
							 'legiang45', 'Giangadmin456'),(
							 'minhphan', 'MiNhphan7145'),(
							 'phuoctran', 'TranPhuoc0202'),(
							 'linhle', 'LELINH2804'
);

INSERT INTO `Administration` values(
									1, 'trankimkhanh29') ,(
									2, 'legiang45'
);
INSERT INTO `Co_restaurant` values(
									1, 'saigonquangt', 'Sai Gon quan', 4),(
									2, 'thedailycoffee90', 'The Daily Coffee', 5),(
									3, 'phohanoi79', 'Pho Ha Noi', 3
);
INSERT INTO `Co_restaurant_phone` values(
											1, '0905234867'),(
											1, '0905232891'),(
											2, '0903481041'),(
											2, '0782323150'),(
											3, '0784545321'
);
INSERT INTO `Co_restaurant_address` values(
											1, '45 Trần Minh Quyền'),(
											1, '78 Ngô Gia Tự'),(
											2, '123 Lê Lai'),(
											3, '29 Nguyễn Thị Minh Khai'),(
											3, '45 Nguyễn Du'),(
											3, '435 Ngô Quyền'
);
INSERT INTO `Customer`( `Cus_id` , `username` , `FName` , `MName` , `LName` , `BDate` , `Email` , `Gender`) 
VALUES(
		1, 'nhanmnm', 'Nhan', 'Thanh','Nguyen', '2002-03-10', 'nhan123@gmail.com', 'Male'),(
		2, 'huylkl', 'Huy','Quang','Le', "2000-11-10", "huy.le@gmail.com", "Male"),(
		3, 'khanhhit', 'Khanh','Minh','Tran', "2001-09-01", "khanhhehe@gmail.com", "Female"),(
		4, 'daobahuy89',  'Duy', 'Ba', 'Dao',"1999-04-05", "dao.ba.duy@gmail.com", "Male"),(
		5, 'minhphan', 'Minh','Quang','Phan', "1975-11-06", "caubengoc@gmail.com", "Male"),(
		6, 'phuoctran', 'Phuoc','Huu','Tran', "1997-08-03", "tranphuoc97@gmail.com", "Male"),(
		7, 'linhle', 'Linh','Thuy','Le', "1976-04-28", "linh2804le@gmail.com", "Female"
);
INSERT INTO `Customer_phone` values(
									1, '0903481044'),(
									1, '0904586111'),(
									2, '0905345756'),(
									3, '0935044849'),(
									4, '0835488751'),(
									5, '0782323456'),(
									6, '0385792310'),(
									6, '0382573971'),(
									7, '0976145098'),(
									7, '0935044648'
);

INSERT INTO `Membership` values(
								1, 1, 3, 15000),(
								2, 3, 2, 2500),(
								3, 4, 1, 109),(
								4, 2, 3, 30000),(
								5, 7, 2, 1500),(
								6, 5, 1, 290),(
								7, 6, 0, 0
);
INSERT INTO `Payment` values(
								1, 1, 'E-wallet'),(
								4, 2, 'Card'),(
								2, 3, 'Cash'),(
								5, 4, 'E-wallet'),(
								3, 5, 'Card'),(
								7, 6, 'Cash'),(
								6, 7, 'Cash'
);
INSERT INTO `E-wallet`values (
								1, 1, '02090045'),(
								5, 4, '64374567'
);

INSERT INTO `Card` values(
							4, 2, 'OCB', '0013100000000007'),(
							3, 5, 'MB', '0402198555555'
);
INSERT INTO `Food_type` values(
								'alcohol-beer', 1),(
								'bun', 2),(
								'banh my', 3),(
								'com', 4),(
								'trang mieng', 5),(
								'tra sua', 6),(
								'nuoc ep - sinh to', 7),(
								'fast food', 8),(
								'ca phe - tra', 9),(
								'khac',10
);

select * from food;

INSERT INTO `Food` values(8, 100, 2, 'Gà rán', 34000, 'Ga ran', 1, 'L');

INSERT INTO `Food` values(
							1, 1 , 4 , 'cơm sườn bì', 30000, '1 suon+bi', 1,'M', 'https://i.ytimg.com/vi/tnIWz0AVp-0/hqdefault.jpg'),(
							1, 2, 4, 'cơm sườn bì trứng', 40000, '1 suon+1 trung+bi', 1,'M', 'https://i.ytimg.com/vi/tnIWz0AVp-0/hqdefault.jpg'),(
							1, 3 , 4 , 'cơm sườn bì chả', 50000, '1 suon+bi+1 cha', 1,'M', 'https://i.ytimg.com/vi/tnIWz0AVp-0/hqdefault.jpg'),(
							1, 4 , 4 , 'cơm sườn bì', 40000, '1 suon to+bi', 1,'L', 'https://i.ytimg.com/vi/tnIWz0AVp-0/hqdefault.jpg'),(
							1, 5, 4, 'cơm sườn bì trứng', 50000, '1 suon to+1 trung+bi', 1,'L', 'https://i.ytimg.com/vi/tnIWz0AVp-0/hqdefault.jpg'),(
							1, 6 , 4 , 'cơm sườn bì chả', 60000, 'suon to+bi+cha', 1,'L', 'https://i.ytimg.com/vi/tnIWz0AVp-0/hqdefault.jpg'),(
							1, 7 , 2 , 'bún riêu',  25000, NULL, 1,'M', 'https://cdn.tgdd.vn/2020/08/CookProduct/Untitled-1-1200x676-10.jpg'),(
							1, 8 , 2 , 'bún riêu', 40000, NULL, 1,'L', 'https://cdn.tgdd.vn/2020/08/CookProduct/Untitled-1-1200x676-10.jpg'),(
							1, 9 , 2 , 'hủ tiếu', 30000, NULL , 1,'M', 'https://cdn.tgdd.vn/2021/08/CookProduct/thumbcn-1200x676-5.jpg'),(
							1, 10, 2, 'hủ tiếu' , 35000,  NULL , 1,'L', 'https://cdn.tgdd.vn/2021/08/CookProduct/thumbcn-1200x676-5.jpg'),(
							1, 11, 10 , 'sườn',  15000, NULL, 1,'M'),(
							1, 12 , 10 , 'trứng', 5000, NULL, 1,'M'),(
							1, 13, 10, 'chả', 5000, NULL, 1,'M'),(
							1, 14 , 10 , 'bì', 5000, NULL, 1,'M'),(
							1, 15 , 10 , 'bún thêm', 5000, NULL, 1,'M'),(
							1, 16 , 10 , 'cơm thêm', 2000, NULL, 1,'M'),(
							2, 1 , 6 , 'trà sữa đặc biệt', 45000, '7 loai topping', 1,'M', 'http://nguyenlieuantoan.com/assets/ckfinder/uploads/images/%E1%BA%A2NH%20TR%C3%80%20S%E1%BB%AEA/menu-cac-loai-tra-sua-suong-sao.jpg'),(
							2, 2, 6, 'trà sữa truyền thống kem trứng nướng', 42000, 'da bao gom chan trau trang', 1,'M', 'http://nguyenlieuantoan.com/assets/ckfinder/uploads/images/%E1%BA%A2NH%20TR%C3%80%20S%E1%BB%AEA/menu-cac-loai-tra-sua-suong-sao.jpg'),(
							2, 3 , 6 , 'trà sữa olong', 42000, 'da bao gom tran chau den', 1,'M', 'https://file.hstatic.net/1000394081/file/tra-sua-thach-cu-nang_e77150f87fc74746a9352f8a2370db62.jpg'),(
							2, 4 , 6 , 'trà sữa gạo rang', 40000, 'da bao gom tran chau trang', 1,'M', 'http://nguyenlieuantoan.com/assets/ckfinder/uploads/images/%E1%BA%A2NH%20TR%C3%80%20S%E1%BB%AEA/menu-cac-loai-tra-sua-suong-sao.jpg'),(
							2, 5, 6, 'trà sữa hoa nhài', 35000, NULL, 1,'M', 'https://file.hstatic.net/1000394081/file/tra-sua-thach-cu-nang_e77150f87fc74746a9352f8a2370db62.jpg'),(
							2, 6 , 6 , 'trà sữa socola', 40000, 'da bao gom tran chau den', 1,'M', 'http://nguyenlieuantoan.com/assets/ckfinder/uploads/images/%E1%BA%A2NH%20TR%C3%80%20S%E1%BB%AEA/menu-cac-loai-tra-sua-suong-sao.jpg'),(
							2, 7 , 6 , 'trà sữa khoai môn',  40000, NULL, 1,'M', 'https://file.hstatic.net/1000394081/file/tra-sua-thach-cu-nang_e77150f87fc74746a9352f8a2370db62.jpg'),(
							2, 8 , 6 , 'trà sữa bạc hà', 40000, NULL, 1,'M', 'https://file.hstatic.net/1000394081/file/tra-sua-thach-cu-nang_e77150f87fc74746a9352f8a2370db62.jpg'),(
							2, 9 , 6 , 'trà sữa dâu', 40000, NULL , 1,'M', 'https://file.hstatic.net/1000135323/file/tra_sua_ngon_4_6d3b9c69eed04f9a8827064fa142ed55_1024x1024.jpg'),(
							2, 10, 6, 'trà sữa thái xanh' , 40000,  NULL , 1,'M', 'https://file.hstatic.net/1000135323/file/tra_sua_ngon_4_6d3b9c69eed04f9a8827064fa142ed55_1024x1024.jpg'),(
							2, 11, 6, 'trà sữa truyền thống kem trứng nướng', 47000, 'da bao gom chan trau trang', 1,'L', 'http://nguyenlieuantoan.com/assets/ckfinder/uploads/images/%E1%BA%A2NH%20TR%C3%80%20S%E1%BB%AEA/menu-cac-loai-tra-sua-suong-sao.jpg'),(
							2, 12, 6 , 'trà sữa olong', 47000, 'da bao gom tran chau den', 1,'L', 'https://file.hstatic.net/1000135323/file/tra_sua_ngon_4_6d3b9c69eed04f9a8827064fa142ed55_1024x1024.jpg'),(
							2, 13 , 6 , 'trà sữa gạo rang', 45000, 'da bao gom tran chau trang', 1,'L', 'https://trasuabandb.com/wp-content/uploads/2021/05/z2493896397292_3bece35b1b10062dfa6f9081a5c09147.jpg'),(
							2, 14, 6, 'trà sữa hoa nhài', 40000, NULL, 1,'L', 'https://file.hstatic.net/1000135323/file/tra_sua_ngon_4_6d3b9c69eed04f9a8827064fa142ed55_1024x1024.jpg'),(
							2, 15 , 6 , 'trà sữa socola', 45000, 'da bao gom tran chau den', 1,'L', 'https://file.hstatic.net/1000135323/file/tra_sua_ngon_4_6d3b9c69eed04f9a8827064fa142ed55_1024x1024.jpg'),(
							2, 16 , 6 , 'trà sữa khoai môn',  45000, NULL, 1,'L', 'https://file.hstatic.net/1000135323/file/tra_sua_ngon_4_6d3b9c69eed04f9a8827064fa142ed55_1024x1024.jpg'),(
							2, 17 , 6 , 'trà sữa bạc hà', 45000, NULL, 1,'L', 'https://trasuabandb.com/wp-content/uploads/2021/05/z2493896397292_3bece35b1b10062dfa6f9081a5c09147.jpg'),(
							2, 18 , 6 , 'trà sữa dâu', 45000, NULL , 1,'L', 'https://trasuabandb.com/wp-content/uploads/2021/05/z2493896397292_3bece35b1b10062dfa6f9081a5c09147.jpg'),(
							2, 19, 6, 'trà sữa thái xanh' , 45000,  NULL , 1,'L', 'https://trasuabandb.com/wp-content/uploads/2021/05/z2493896397292_3bece35b1b10062dfa6f9081a5c09147.jpg'),(
							2, 20, 7 , 'sinh to dâu',  25000, NULL, 1,'M'),(
							2, 21 , 7 , 'sinh to bơ', 25000, NULL, 1,'M'),(
							2, 22, 7, 'sinh to mãng cầu', 25000, NULL, 1,'M'),(
							2, 23 , 7 , 'sinh to sapoche', 25000, NULL, 1,'M'),(
							2, 24 , 7 , 'sinh to dưa gang', 25000, NULL, 1,'M'),(
							2, 25 , 7 , 'sinh to dừa', 25000, NULL, 1,'M'),(
							2, 26, 7 , 'sinh to dâu',  30000, NULL, 1,'L'),(
							2, 27 , 7 , 'sinh to bơ', 30000, NULL, 1,'L'),(
							2, 28, 7, 'sinh to mảng cầu', 30000, NULL, 1,'L'),(
							2, 29 , 7 , 'sinh to sapoche', 30000, NULL, 1,'L'),(
							2, 30 , 7 , 'sinh to dưa gang', 30000, NULL, 1,'L'),(
							2, 31 , 7 , 'sinh to dừa', 30000, NULL, 1,'L'),(
							2, 32, 8 , 'cà phê đen',  25000, NULL, 1,'M'),(
							2, 33 , 8 , 'cà phê sữa', 25000, NULL, 1,'M'),(
							2, 34, 8, 'bạc xỉu', 25000, NULL, 1,'M'),(
							2, 35 , 8 , 'trà đào', 25000, NULL, 1,'M'),(
							2, 36 , 8 , 'trà dâu', 25000, NULL, 1,'M'),(
							2, 37, 8 , 'cà phê đen',  30000, NULL, 1,'L'),(
							2, 38 , 8 , 'cà phê sữa', 30000, NULL, 1,'L'),(
							2, 39, 8, 'bạc xỉu', 30000, NULL, 1,'L'),(
							2, 40 , 8 , 'trà đào', 30000, NULL, 1,'L'),(
							2, 41 , 8 , 'tra dâu', 30000, NULL, 1,'L'),(
							3, 1 , 2 , 'phở bò thập cẩm', 45000, 'bo tai, nam, gan, bo vien' , 1,'M'),(
							3, 2, 2, 'phở tái bò viên', 35000, NULL, 1,'M'),(
							3, 3 , 2 , 'phở nạm gân', 35000, NULL, 1,'M'),(
							3, 4 , 2 , 'phở tái gân', 35000, NULL, 1,'M'),(
							3, 5, 2, 'phở tái nạm', 35000, NULL, 1,'M'),(
							3, 6 , 2 , 'phở tái', 30000, NULL, 1,'M'),(
							3, 7 , 2 , 'phở gân',  30000, NULL, 1,'M'),(
							3, 8 , 2 , 'phở nạm', 30000, NULL, 1,'M'),(
							3, 9 , 2 , 'phở gà', 30000, NULL , 1,'M'),(
							3, 10 , 2 , 'phở bò thập cẩm', 60000, 'bo tai, nam, gan, bo vien' , 1,'L'),(
							3, 11, 2, 'phở tái bò viên', 45000, NULL, 1,'L'),(
							3, 12 , 2 , 'phở nạm gân', 45000, NULL, 1,'L'),(
							3, 13 , 2 , 'phở tái gân', 45000, NULL, 1,'L'),(
							3, 14, 2, 'phở tái nạm', 45000, NULL, 1,'L'),(
							3, 15 , 2 , 'phở tái', 40000, NULL, 1,'L'),(
							3, 16 , 2 , 'phở gân',  40000, NULL, 1,'L'),(
							3, 17 , 2 , 'phở nạm', 40000, NULL, 1,'L'),(
							3, 18 , 2 , 'phở gà', 40000, NULL , 1,'L'),(
							3, 19, 10, 'thịt bò nạm' , 15000,  NULL , 1,'M'),(
							3, 20, 10, 'gân bò', 15000, NULL, 1,'M'),(
							3, 21, 10, 'bò viên', 15000, NULL, 1,'M'),(
							3, 22 , 10, 'thịt bò tái', 15000, NULL, 1,'M'),(
							3, 23, 10, 'quẩy', 5000, NULL, 1,'M'),(
							3, 24 , 10 , 'phở thêm', 10000, NULL , 1,'M'
);
INSERT INTO `Combo` values(
							1,	1,	'Com bo 1',	'Com suon bi va nuoc sam bi dao',	45000,	1),(
							2,	1,	'Combo 2',	'Hu tieu va sua bap',	50000,	0),(
							3,	1,	'Combo 3',	'Hu tieu và  com suon bi',	50000,	1),(
							4,	2,	'Combo tiện lợi',	'Tra sua olong M va tra sua gao rang M',	75000,	1),(
							5,	2,	'Combo đặc biệt',	'Tra sua dac biet M và tra sua olong M',	80000,	1),(
							6,	3,	'Combo siêu bự',	'Pho nam L va pho ga L',	75000,	1),(
							7,	3,	'Combo ngon',	'Pho tai M và pho ga M',	55000,	1),(
							8,	3,	'Combo hấp dẫn',	'Pho bo thap cam M va pho nam gan L',	85000,	1
							);
INSERT INTO `Cart` (`Cart_id`, `Cus_id`) values(
												1, 1),(
												2, 3),(
												3, 4),(
												4,2),(
												5, 5),(
												6, 7),(
												7, 6
												);
INSERT INTO `Order`(`Cart_id`, `Order_id`, `Cus_id`,`Pmt_id`, `Shipper_name` ,`Shipper_phone`,
			`Shipper_lic` , `Note`, `Delivery_address`, `Order_time`, `Arrival_time`, `Required_time`, `Status`
            ) values(
						1,	1,	1,	1,	'Nguyen Van Lam',	'0903481048',	'849364143141',	'lay nhieu chanh',	'78 Nguyễn Du',	'2022-12-05 14:00:00',	'2022-12-05 14:40:00',	'2022-12-05 14:30:00', 1),(
						1,	8,	1,	1,	'Pham Thu Suong', '0935481834',	'475363563376',	NULL	,'78 Nguyễn Du', '2022-09-02 20:15:00',	'2022-09-02 20:40:00',	'2022-09-02 20:50:00',	1),(
						2,	2,	3,	5,	'Le Phuoc Huy',	'0784545617',	'567364143234',		NULL, '841 Lê Lai',	'2022-10-05 08:00:00',	'2022-10-05 08:30:00',	'2022-10-05 14:20:00',	1),(
						3,	5,	4,	2,	'La Nhu Hang',	'0282424510',	'783364143113',	'them nhieu ot',	'29 Âu Cơ',	'2022-01-17 14:00:00',	'2022-01-17 14:35:00',	'2022-01-17 14:40:00',	1),(
						4,	6,	2,	3,	'Nguyen Minh Bach',	'0905241048',	'323364143141',	NULL,	'11 Tân Kì Tân Quý', '2022-09-07 09:38:00',	'2022-09-07 09:59:00',	'2022-09-09 09:50:00',	1),(
						5,	3,	5,	4,	'Pham Dang Khoa',	'0935481041',	'434364143376',	NULL,	'209 Lý Thường Kiệt', '2022-09-02 20:15:00',	'2022-09-02 20:40:00','	2022-09-02 20:50:00',	1),(
						5,	10,	5,	4,	'Ly Thanh Thanh',	'0285102929',	'563367643113',	NULL,	'209 Lý Thường Kiệt', '2022-02-17 15:47:00',	'2022-02-17 16:17:00',	'2022-02-17 16:20:00',	1),(
						6,	4,	7,	6,	'Duong Nhu Hung',	'0905716225',	'205364143286',	'khong lay muong dua' ,	'90 Lý Thái Tổ', '2022-05-04 11:00:00', '2022-05-04 11:50:00',	'2022-05-04 11:40:00', 0),(
						7,	7,	6,	7,	'Tran Tra My',	'0784547367',	'675364143334',	NULL,	'39 Nguyễn Lương Bằng',	'2022-10-05 15:00:00',	'2022-10-05 15:30:00',	'2022-10-05 15:25:00',	1),(
						7,	9,	6,	7,	'Nguyen Nhu Y',	'0385162235',	'195364143119',	NULL,	'39 Nguyễn Lương Bằng', '2022-04-27 13:20:00',	'2022-04-27 13:45:00',	'2022-04-27 13:45:00',	0
    );

INSERT INTO `Combo_cart` values(
								1, 4, 1, 45000),(
                                2, 2, 1, 50000),(
                                6, 1, 1, 75000),(
                                5, 3, 1, 80000
);

INSERT INTO `Food_cart` values(
						1, 6, 4 , 1, 60000),(
                        1, 9, 4 , 2, 30000),(
                        1, 12, 4 , 2, 5000),(
                        1, 15, 4, 1, 5000),(
                        2, 1, 3, 2, 45000),(
                        2, 7, 2 , 1, 30000),(
                        2, 7, 3 , 2, 40000),(
                        2, 23, 3 , 4, 30000),(
                        2, 25, 2 , 3, 25000),(
                        2, 35, 2 , 2, 25000),(
                        2, 40, 6 , 1, 30000),(
                        3, 2, 1 , 1, 35000),(
                        3, 2, 7 , 1, 35000),(
                        3, 5, 7 , 1, 35000),(
                        3, 8, 6 , 2, 30000),(
                        3, 12, 1 , 2, 45000),(
                        3, 17, 1 , 1, 45000),(
                        3, 18, 5 , 4, 40000
);
INSERT INTO `Food_order` VALUES(
								3, 12, 1, 1, 1),(
                                3, 2, 1, 1, 1),(
                                2, 25, 2, 2, 1),(
                                1, 6, 4, 6, 1),(
                                1, 9, 4, 6, 1),(
                                1, 15, 4, 6, 1),(
                                2, 40, 6, 4, 1),(
                                3, 18, 5, 3, 1),(
                                3, 5, 7, 7, 1
);
INSERT INTO `Combo_order` values(
							1,1,1 ,1);

INSERT INTO `Promotion` values(
								12345, 100, 20000, 400000, '2022-05-05', '2022-12-09', 1, 1),(
								34756, 200, 25000, 500000, '2022-10-05', '2022-10-09', 2, 2),(
								13543, 90, 50000, 900000, '2022-11-30', '2022-12-05', 3, 2),(
								56345, 290, 30000, 600000, '2022-03-03', '2022-03-08', 1, 1),(
								35656, 450, 10000, 200000, '2022-09-17', '2022-09-20', 1, 1
);
INSERT INTO `Voucher` values(12345, 10000),(
							 34756, 20000),(
                             13543,50000
                             
);
INSERT INTO `Coupon` values(35656, 20),(
							56345, 10
							
);
INSERT INTO `Order_promotion` values(
										1, 1, 12345),(
                                        7, 7, 34756
);

