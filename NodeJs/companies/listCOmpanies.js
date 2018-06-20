const faker=require('faker');

console.log(faker.name.findName());


//console out 10 random company names with state

for ( var i=0; i<10; i++){

console.log(faker.company.companyName(), faker.address.state());

}
