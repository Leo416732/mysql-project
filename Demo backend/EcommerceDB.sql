CREATE TABLE products (
    id int auto_increment ,
    name varchar(255) not null,
    brand_id int , 
    category_id int, 
    created_date date , 
    description varchar(255),
    sale varchar(255),
    price double not null,
    stock int not null,
    image varchar(255), 
    primary key (id) , 
    foreign key(brand_id) references brand(id),
    foreign key (category_id) references category(id)
);

create table category (
    id int auto_increment , 
    name varchar(255) not null,
    primary key(id)
);
 
 create table brand (
    id int auto_increment , 
    name varchar(255) not null, 
    primary key(id)
);

create table wishlist (
    id int auto_increment ,
    user_id int, 
    product_id int, 
    primary key(id),
    foreign key(user_id) references users(user_id),
    foreign key (product_id) references products(id)
);
