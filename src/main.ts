require('dotenv').config();
import { Command } from 'commander';
import initBootstrap from '@/apps/init/main';
import appBootstrap from '@/apps/oauth/main';

async function bootstrap() {
  const program = new Command(process.env.NODE_UID);
  program.version(require('../package.json').version);

  // program
  //   .command('init')
  //   .description('init')
  //   .name('init')
  //   .action(initBootstrap);

  await program.parseAsync(process.argv);
  program
    .command('serve', { isDefault: true })
    .description('Start oauth server')
    .name('serve')
    .action(appBootstrap);

  program
    .command('init')
    .description('Run the init script (migrate and seed the DB)')
    .name('init')
    .action(initBootstrap);

  await program.parseAsync(process.argv);
}

bootstrap();
