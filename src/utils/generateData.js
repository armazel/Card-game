import faker from 'faker'



const generateData = (count) =>{

    let data = [];

    for(let i=0; i < count; i++){
        data.push({
            name:faker.name.findName(),
            email: faker.internet.email(),
            imageUrl: faker.internet.avatar(),
            amountCount: faker.finance.amount(),
            id: faker.random.number(),
            text: faker.lorem.paragraph()
        });
    }

    return data;
};

export default generateData;