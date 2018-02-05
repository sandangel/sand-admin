import { codegen } from '@ngrx/codegen';
import { exec } from 'child_process';
import * as ora from 'ora';

codegen('./@(apps|libs)/**/*.actions.ts');

exec('yarn format', () => ora('Format generated code').succeed());
