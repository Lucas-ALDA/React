<?php

namespace Container7fY5407;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_KVUZeCJService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.KVUZeCJ' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.KVUZeCJ'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'todoRepository' => ['privates', 'App\\Repository\\TodoRepository', 'getTodoRepositoryService', true],
        ], [
            'todoRepository' => 'App\\Repository\\TodoRepository',
        ]);
    }
}
