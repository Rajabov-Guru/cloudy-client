export interface WithChildren<T> {
  children?: T;
}

export interface WithClasses {
  className?: string;
}

export interface WithChildrenSx<T> extends WithChildren<T>, WithClasses {}

export type Size = 'small' | 'medium' | 'big' | 'large';
