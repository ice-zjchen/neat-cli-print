import chalk from 'chalk';

export const createPrinter = (identifier: string): Logger => {
    const label = chalk.gray(`[${identifier}]`);

    const info = (...message: string[]): void => (
        console.log(
            label,
            chalk.blueBright.bgBlack('info'),
            ...message,
        )
    );

    const error = (...message: string[]): void => {
        console.error(
            label,
            chalk.red.bgBlack('ERR!'),
            ...message
        );
    }

    const warn = (...message: string[]): void => {
        console.warn(
            label,
            chalk.yellow.bgBlack('WARN'),
            ...message
        );
    };

    const success = (...message: string[]): void => (
        console.log(
            label,
            chalk.green.bold('success'),
            ...message
        )
    );

    return {info, error, warn, success};
};
