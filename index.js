import riot from 'riot'
if (DEV) {
    require('riot-hot-reload')
}
import './app'

riot.mount('app');
