declare module "gsap-trial/SplitText" {
    export class SplitText {
        chars: HTMLElement[];
        words: HTMLElement[];
        lines: HTMLElement[];
        constructor(target: any, vars?: Record<string, any>);
        revert(): void;
        split(vars?: Record<string, any>): void;
        static create(target: any, vars?: Record<string, any>): SplitText;
    }
}

declare module "gsap-trial/ScrollSmoother" {
    export class ScrollSmoother {
        paused(value?: boolean): any;
        scrollTop(value?: number): number | ScrollSmoother;
        scrollTo(target: any, smooth?: boolean, position?: string): void;
        kill(): void;
        static create(vars?: Record<string, any>): ScrollSmoother;
        static get(): ScrollSmoother;
        static refresh(hard?: boolean): void;
    }
}
