const parseEnv = () => {
    process.env.RSS_name1 = 'value1';
    process.env.RSS_name2 = 'value2';
    console.log(`RSS_name1 = ${process.env.RSS_name1}, RSS_name2 = ${process.env.RSS_name2}`);
};

parseEnv();